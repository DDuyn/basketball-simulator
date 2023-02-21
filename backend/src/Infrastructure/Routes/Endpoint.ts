import { PrismaClient } from '@prisma/client';
import express, { NextFunction, Request, Response, Router } from 'express';
import { Inject } from 'typedi';
import { RequestValidatorMiddleware } from '../Middleware/RequestValidatorMiddleware';
import { DatabaseContext } from '../Persistence/Context/DatabaseContext';
import { SchemaValidation } from '../Types/SchemaValidation';

export interface RegisterEndpoint {
	registerEndpoints(app: express.Application): Promise<void>;
}

export abstract class Endpoint<TReq extends Request, TRes extends Response> {
	private router: Router;

	constructor(@Inject() private readonly dbContext: DatabaseContext) {
		this.router = Router();
		this.configure();
	}

	async register(): Promise<Router> {
		return this.router;
	}

	async connection(): Promise<PrismaClient> {
		return this.dbContext.getConnection();
	}

	protected post(route: string, schemaValidation?: SchemaValidation) {
		this.router.post(
			route,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	protected get(route: string, schemaValidation?: SchemaValidation) {
		this.router.get(
			route,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	protected delete(route: string, schemaValidation?: SchemaValidation) {
		this.router.delete(
			route,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	protected put(route: string, schemaValidation?: SchemaValidation) {
		this.router.get(
			route,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	private async execute(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			return await this.handle(request as TReq, response as TRes);
		} catch (error: any) {
			return next(error);
		}
	}

	protected abstract configure(): void;
	protected abstract handle(request: TReq, response: TRes): Promise<TRes>;
}

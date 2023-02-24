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
	protected readonly VERBS = {
		Get: (path: string, schemaValidation?: SchemaValidation) => {
			this.get(path, schemaValidation);
			//this.registerEndpoint();
		},

		Post: (path: string, schemaValidation?: SchemaValidation) => {
			this.post(path, schemaValidation);
			//this.registerEndpoint();
		},
		Put: (path: string, schemaValidation?: SchemaValidation) => {
			this.put(path, schemaValidation);
			//this.registerEndpoint();
		},
		Delete: (path: string, schemaValidation?: SchemaValidation) => {
			this.delete(path, schemaValidation);
			//this.registerEndpoint();
		}
	};

	constructor(@Inject() private readonly dbContext: DatabaseContext) {
		this.router = Router();
		this.configure();
	}

	async register(): Promise<Router> {
		return this.router;
	}

	protected async connection(): Promise<PrismaClient> {
		return this.dbContext.getConnection();
	}

	private post(route: string, schemaValidation?: SchemaValidation) {
		this.router.post(
			route,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	private get(route: string, schemaValidation?: SchemaValidation) {
		this.router.get(
			route,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	private delete(route: string, schemaValidation?: SchemaValidation) {
		this.router.delete(
			route,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	private put(route: string, schemaValidation?: SchemaValidation) {
		this.router.get(
			route,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	private registerEndpoint(): void {
		//EndpointsV1.addEndpoint(this.router);
		//RegisterEndpoints.registerEndpoint(this.router);
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

import { PrismaClient } from '@prisma/client';
import express, { Request, Response, Router } from 'express';
import { Inject } from 'typedi';
import { Logger } from '../Logging/Logger';
import { RequestValidatorMiddleware } from '../Middleware/RequestValidatorMiddleware';
import { DatabaseContext } from '../Persistence/Context/DatabaseContext';
import { SchemaValidation } from '../Types/SchemaValidation';

export interface RegisterEndpoint {
	registerEndpoints(app: express.Application): Promise<void>;
}

export abstract class Endpoint {
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
			(request: Request, response: Response) => this.execute(request, response)
		);
	}

	protected get(route: string, schemaValidation?: SchemaValidation) {
		this.router.get(
			route,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response) => this.execute(request, response)
		);
	}

	protected delete(route: string, schemaValidation?: SchemaValidation) {
		this.router.delete(
			route,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response) => this.execute(request, response)
		);
	}

	protected put(route: string, schemaValidation?: SchemaValidation) {
		this.router.get(
			route,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response) => this.execute(request, response)
		);
	}

	private async execute(request: Request, response: Response): Promise<Response> {
		try {
			return await this.handle(request, response);
		} catch (error: any) {
			Logger.error(error.message);
			return response.status(500).json(error.message);
		}
	}

	protected abstract configure(): void;
	protected abstract handle(request: Request, response: Response): Promise<Response>;
}

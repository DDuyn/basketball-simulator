import { NextFunction, Request, Response, Router } from 'express';

import { RequestValidatorMiddleware } from '../Middleware/RequestValidatorMiddleware';
import { SchemaValidation } from '../Types/SchemaValidation';
import { RegisterEndpoints } from './RegisterEndpoints';

export abstract class Endpoint<TReq extends Request, TRes extends Response> {
	private router: Router;

	constructor() {
		this.router = Router();
		this.configure();
		this.registerEndpoint();
	}

	protected post(path: string, schemaValidation?: SchemaValidation) {
		this.router.post(
			path,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	protected get(path: string, schemaValidation?: SchemaValidation) {
		this.router.get(
			path,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	protected delete(path: string, schemaValidation?: SchemaValidation) {
		this.router.delete(
			path,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	protected put(path: string, schemaValidation?: SchemaValidation) {
		this.router.get(
			path,
			schemaValidation || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response, next: NextFunction) =>
				this.execute(request, response, next)
		);
	}

	private registerEndpoint(): void {
		RegisterEndpoints.registerEndpoint(this.router);
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

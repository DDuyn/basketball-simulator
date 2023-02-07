import express, { Request, Response, Router } from 'express';
import { RequestValidatorMiddleware } from '../Middleware/RequestValidatorMiddleware';

export interface RegisterEndpoint {
	registerEndpoints(app: express.Application): Promise<void>;
}

export abstract class Endpoint {
	private router: Router;

	constructor() {
		this.router = Router();
		this.configure();
	}

	protected post(route: string, rules?: any) {
		this.router.post(
			route,
			rules || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response) => this.handle(request, response)
		);
	}

	protected get(route: string, rules?: any) {
		this.router.get(
			route,
			rules || [],
			RequestValidatorMiddleware.run,
			(request: Request, response: Response) => this.handle(request, response)
		);
	}

	async register(): Promise<Router> {
		return this.router;
	}

	protected abstract configure(): void;
	protected abstract handle(request: Request, response: Response): Promise<Response>;
}

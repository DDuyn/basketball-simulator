import express, { Router } from 'express';
import { Service } from 'typedi';

@Service()
export class RegisterEndpoints {
	private static routers: Router[] = [];

	static registerEndpoint(endpointRouter: Router): void {
		this.routers.push(endpointRouter);
	}

	async run(app: express.Application) {
		for (const route of RegisterEndpoints.routers) {
			app.use('/api/', await route);
		}
	}
}

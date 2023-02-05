import express from 'express';

export abstract class Router {
	protected route: express.Router;

	constructor() {
		this.route = express.Router();
		this.configure();
	}

	async run(): Promise<express.Router> {
		return Promise.resolve(this.route);
	}

	protected abstract configure(): void;
}

export interface InitializerRouter {
	routers: Router[];
	init(app: express.Application): Promise<void>;
}

import express from 'express';
import { Service } from 'typedi';
import { InitializerRouter } from './Router';
import { InitializeRouterV1 } from './v1/InitializeRouterV1';
import { InitializeRouterV2 } from './v2/InitializeRouterV2';

@Service()
export class InitializeRouters {
	private routers: InitializerRouter[] = [];

	constructor(
		private readonly routerV1: InitializeRouterV1,
		private readonly routerV2: InitializeRouterV2
	) {
		this.routers = [this.routerV1, this.routerV2];
	}

	async run(app: express.Application) {
		for (const route of this.routers) {
			await route.init(app);
		}
	}
}

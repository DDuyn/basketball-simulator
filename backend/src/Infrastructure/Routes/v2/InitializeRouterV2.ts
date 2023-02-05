import express from 'express';
import { Service } from 'typedi';
import { RouterTeamV2 } from '../../../Features/Team/v2/RouterTeamV2';
import { InitializerRouter, Router } from '../Router';

@Service()
export class InitializeRouterV2 implements InitializerRouter {
	routers: Router[] = [];

	constructor(private readonly routerTeam: RouterTeamV2) {
		this.routers = [this.routerTeam];
	}

	async init(app: express.Application): Promise<void> {
		for (const route of this.routers) {
			app.use('/api/v2/', await route.run());
		}
	}
}

import express from 'express';
import { Service } from 'typedi';
import { RouterRegionV1 } from '../../../Features/Region/v1/RouteRegionV1';
import { RouterTeamV1 } from '../../../Features/Team/v1/RouterTeamV1';
import { InitializerRouter, Router } from '../Router';

@Service()
export class InitializeRouterV1 implements InitializerRouter {
	routers: Router[] = [];

	constructor(
		private readonly routerTeam: RouterTeamV1,
		private readonly routerRegion: RouterRegionV1
	) {
		this.routers = [this.routerTeam, this.routerRegion];
	}

	async init(app: express.Application): Promise<void> {
		for (const route of this.routers) {
			app.use('/api/v1/', await route.run());
		}
	}
}

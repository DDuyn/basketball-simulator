import express from 'express';
import { Service } from 'typedi';
import { InitializerRouter, Router } from '../Router';
import { RouterRegionV1 } from './Region/RouterRegion';
import { RouterTeamV1 } from './Team/RouterTeam';

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

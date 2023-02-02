import express from 'express';
import { Service } from 'typedi';
import { Router } from './Router';
import { RouterTeam } from './Team/RouterTeam';

@Service()
export class InitializeRouters {
	private routers: Router[] = [];

	constructor(private readonly routeTeam: RouterTeam) {
		this.init();
	}

	private init() {
		this.routers = [this.routeTeam];
	}

	async run(app: express.Application) {
		for (const route of this.routers) {
			app.use(await route.run());
		}
	}
}

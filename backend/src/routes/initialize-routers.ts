import express from 'express';
import { Service } from 'typedi';
import { Router } from '../routes/router';
import { TeamRouter } from '../routes/teams/config-team-routes';

@Service()
export class InitializeRouters {
	private routers: Router[] = [];

	constructor(private readonly teamRouter: TeamRouter) {
		this.init();
	}

	private init() {
		this.routers = [this.teamRouter];
	}

	async run(app: express.Application) {
		for (const route of this.routers) {
			app.use(await route.run());
		}
	}
}

import express from 'express';
import Container, { Service } from 'typedi';
import { TeamRouter, initTeamRoutes } from './teams/config-team-routes';

const routes = [Container.get(TeamRouter)];

export const configControllers = async (app: express.Application) => {
	await initTeamRoutes(app);
};

@Service()
export class ConfigControllers {
	constructor(private readonly teamRouter: TeamRouter) {}

	async run(app: express.Application) {
		const r = await this.teamRouter.run();
		app.use(r);
	}
}

import express, { Request, Response } from 'express';
import Container, { Service } from 'typedi';
import { Controller } from '../controller';
import { GetTeamsController } from './get-teams-controller';

const teamsController: Controller[] = [Container.get(GetTeamsController)];

export const initTeamRoutes = (app: express.Application) => {
	for (const controller of teamsController) {
		controller.init(app);
	}
};

@Service()
export class TeamRouter {
	constructor(private readonly getTeamsController: GetTeamsController) {}

	async run(): Promise<express.Router> {
		const route = express.Router();
		route.get('/teams', (request: Request, response: Response) =>
			this.getTeamsController.run(response)
		);
		return Promise.resolve(route);
	}
}

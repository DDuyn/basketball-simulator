import { Request, Response } from 'express';
import { Service } from 'typedi';
import { GetTeamsController } from '../../controllers/teams/get-teams-controller';
import { Router } from '../router';

@Service()
export class TeamRouter extends Router {
	constructor(private readonly getTeamsController: GetTeamsController) {
		super();
	}

	init(): void {
		this.route.get('/teams', (request: Request, response: Response) =>
			this.getTeamsController.run(response)
		);
	}
}

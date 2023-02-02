import express, { Request, Response } from 'express';
import { Service } from 'typedi';
import { GetTeamsService } from '../../services/teams/get-teams-service';
import { Controller } from '../controller';

@Service()
export class GetTeamsController implements Controller {
	constructor(private readonly getTeamsService: GetTeamsService) {}
	async run(response: Response) {
		const teams = this.getTeamsService.run();
		return response.status(200).json(teams);
	}

	init(app: express.Application): void {
		app.get('/teams', (request: Request, response: Response) => this.run(response));
	}
}

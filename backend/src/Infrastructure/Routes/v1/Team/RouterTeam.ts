import { Request, Response } from 'express';
import { Service } from 'typedi';
import { GetAllTeams } from '../../../../Features/Team/GetAllTeams/GetAllTeams';
import { Router } from '../../Router';

@Service()
export class RouterTeamV1 extends Router {
	constructor(private readonly getAllTeams: GetAllTeams) {
		super();
	}

	init(): void {
		this.route.get('/teams', (request: Request, response: Response) =>
			this.getAllTeams.run(response)
		);
	}
}

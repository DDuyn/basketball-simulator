import { Request, Response } from 'express';
import { Service } from 'typedi';
import { CreateTeam } from '../../../../Features/Team/CreateTeam/CreateTeam';
import { GetAllTeams } from '../../../../Features/Team/GetAllTeams/GetAllTeams';
import { Router } from '../../Router';

@Service()
export class RouterTeamV1 extends Router {
	constructor(private readonly getAllTeams: GetAllTeams, private readonly createTeam: CreateTeam) {
		super();
	}

	init(): void {
		this.route.post('/team', (request: Request, response: Response) =>
			this.createTeam.run(request, response)
		);
		this.route.get('/teams', (request: Request, response: Response) =>
			this.getAllTeams.run(response)
		);
	}
}

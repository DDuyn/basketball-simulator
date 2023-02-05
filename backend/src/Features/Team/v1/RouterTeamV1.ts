import { Request, Response } from 'express';
import { Service } from 'typedi';
import { RequestValidatorMiddleware } from '../../../Infrastructure/Middleware/RequestValidatorMiddleware';
import { Router } from '../../../Infrastructure/Routes/Router';
import { CreateTeam } from './CreateTeam/CreateTeam';
import { CreateTeamRequestRules } from './CreateTeam/CreateTeamRequest';
import { GetAllTeams } from './GetAllTeams/GetAllTeams';

@Service()
export class RouterTeamV1 extends Router {
	constructor(private readonly getAllTeams: GetAllTeams, private readonly createTeam: CreateTeam) {
		super();
	}

	configure(): void {
		this.route.post(
			'/team',
			CreateTeamRequestRules,
			RequestValidatorMiddleware.run,
			(request: Request, response: Response) => this.createTeam.run(request, response)
		);
		this.route.get('/teams', (request: Request, response: Response) =>
			this.getAllTeams.run(response)
		);
	}
}

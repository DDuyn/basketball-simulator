import { Request, Response } from 'express';
import { Service } from 'typedi';
import { Router } from '../../../Infrastructure/Routes/Router';
import { CreateTeam } from './CreateTeam/CreateTeam';

@Service()
export class RouterTeamV2 extends Router {
	constructor(private readonly createTeam: CreateTeam) {
		super();
	}

	configure(): void {
		this.route.get('/teams', (request: Request, response: Response) =>
			this.createTeam.run(request, response)
		);
	}
}

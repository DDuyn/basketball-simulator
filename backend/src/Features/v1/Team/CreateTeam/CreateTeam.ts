import { Request, Response } from 'express';
import { Service } from 'typedi';
import { DatabaseContext } from '../../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../../Infrastructure/Routes/Endpoint';
import { CreateTeamRequestRules } from '../../../v2/Team/CreateTeam/CreateTeamRequest';
import { CreateTeamRequest } from './CreateTeamRequest';
import { CreateTeamResponse } from './CreateTeamResponse';

@Service()
export class CreateTeam extends Endpoint {
	constructor(private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.post('/team', CreateTeamRequestRules);
	}

	async handle(request: Request, response: Response) {
		const team: CreateTeamRequest = request.body;
		const connection = await this.dbContext.getConnection();
		const teamCreated: CreateTeamResponse = await connection.team.create({ data: team });

		return response.status(201).json(teamCreated);
	}
}

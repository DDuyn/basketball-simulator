import { Request, Response } from 'express';
import { Service } from 'typedi';
import { Endpoint } from '../../../../Infrastructure/Routes/Endpoint';
import { CreateTeamRequest, CreateTeamSchemaValidation } from './CreateTeamRequest';
import { CreateTeamResponse } from './CreateTeamResponse';

@Service()
export class CreateTeam extends Endpoint {
	configure(): void {
		this.post('/team', CreateTeamSchemaValidation);
	}

	async handle(request: Request, response: Response) {
		const team: CreateTeamRequest = request.body;
		const connection = await this.connection();
		const teamCreated: CreateTeamResponse = await connection.team.create({ data: team });

		return response.status(201).json(teamCreated);
	}
}

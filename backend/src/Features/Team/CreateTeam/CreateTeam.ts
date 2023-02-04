import { Request, Response } from 'express';
import { Service } from 'typedi';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';
import { CreateTeamRequest } from './CreateTeamRequest';
import { CreateTeamResponse } from './CreateTeamResponse';

@Service()
export class CreateTeam {
	constructor(private readonly dbContext: DatabaseContext) {}

	async run(request: Request, response: Response) {
		const team: CreateTeamRequest = request.body;
		const connection = await this.dbContext.getConnection();
		const teamCreated: CreateTeamResponse = await connection.team.create({ data: team });

		return response.status(201).json(teamCreated);
	}
}

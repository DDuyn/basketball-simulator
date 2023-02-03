import { Response } from 'express';
import { Service } from 'typedi';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';
import { GetAllTeamsResponse } from './GetAllTeamsResponse';

@Service()
export class GetAllTeams {
	constructor(private readonly dbContext: DatabaseContext) {}

	async run(response: Response) {
		const connection = await this.dbContext.getConnection();
		const teams: GetAllTeamsResponse[] = await connection.team.findMany();

		return response.status(200).json(teams);
	}
}

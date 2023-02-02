import { Response } from 'express';
import { Service } from 'typedi';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';

@Service()
export class GetAllTeams {
	constructor(private readonly dbContext: DatabaseContext) {}

	async run(response: Response) {
		const connection = await this.dbContext.getConnection();
		const teams = connection.team.findMany();

		return response.status(200).json(teams);
	}
}

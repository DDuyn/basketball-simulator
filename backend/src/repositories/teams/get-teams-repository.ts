import { Team } from '@prisma/client';
import { Service } from 'typedi';
import { Database } from '../../database/index';

@Service()
export class GetTeamRepository {
	async run(): Promise<Team[]> {
		const connection = await Database.getConnection();
		return connection.team.findMany();
	}
}

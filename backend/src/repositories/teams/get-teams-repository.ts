import { Service } from 'typedi';
import { Database } from '../../database';
import { Team } from '../../models/team';
import { Repository } from '../repository';

@Service()
export class GetTeamRepository extends Repository {
	constructor() {
		super();
	}

	async run(): Promise<Team[]> {
		const connection = await Database.getConnection();
		return connection.team.findMany();
	}
}

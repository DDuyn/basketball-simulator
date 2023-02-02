import { Service } from 'typedi';
import { Team } from '../../models/team';
import { Repository } from '../repository';

@Service()
export class GetTeamRepository extends Repository {
	constructor() {
		super();
	}

	async run(): Promise<Team[]> {
		return this.connection.team.findMany();
	}
}

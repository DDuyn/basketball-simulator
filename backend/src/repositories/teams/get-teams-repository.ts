import { Service } from 'typedi';
import { Team } from '../../models/team';
import { Repository } from '../repository';

@Service()
export class GetTeamRepository extends Repository {
	constructor() {
		super();
		this.init();
	}

	async run(): Promise<Team[]> {
		return this.connection.team.findMany();
	}
}

import { Service } from 'typedi';
import { Team } from '../../models/team';
import { GetTeamRepository } from '../../repositories/teams/get-teams-repository';

@Service()
export class GetTeamsService {
	constructor(private readonly getTeamRepository: GetTeamRepository) {}

	async run(): Promise<Team[]> {
		return this.getTeamRepository.run();
	}
}

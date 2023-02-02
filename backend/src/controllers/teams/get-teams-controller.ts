import { Response } from 'express';
import { Service } from 'typedi';
import { GetTeamsService } from '../../services/teams/get-teams-service';

@Service()
export class GetTeamsController {
	constructor(private readonly getTeamsService: GetTeamsService) {}

	async run(response: Response) {
		const teams = await this.getTeamsService.run();
		return response.status(200).json(teams);
	}
}

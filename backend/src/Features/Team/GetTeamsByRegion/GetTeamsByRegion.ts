import { Service } from 'typedi';
import { NotFoundException } from '../../../Domain/Shared/Exceptions/NotFoundException';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import {
	GetTeamsByRegionRequest,
	GetTeamsByRegionSchemaValidation
} from './GetTeamsByRegionRequest';
import { GetTeamsByRegionResponse } from './GetTeamsByRegionResponse';

@Service()
export class GetTeamsByRegion extends Endpoint<GetTeamsByRegionRequest, GetTeamsByRegionResponse> {
	configure(): void {
		this.VERBS.Get('/team/by-region/:code', GetTeamsByRegionSchemaValidation);
	}

	async handle(
		request: GetTeamsByRegionRequest,
		response: GetTeamsByRegionResponse
	): Promise<GetTeamsByRegionResponse> {
		const code = request.params.code;

		const connection = await this.connection();
		const teams = await connection.team.findMany({
			where: {
				region: {
					code: code
				}
			}
		});

		if (!teams) throw new NotFoundException(`${code} has no teams`);

		const teamsResponse: GetTeamsByRegionResponse[] = teams.map((team) => {
			const { id, name, code, flag } = team;

			return { id, name, code, flag } as GetTeamsByRegionResponse;
		});

		return response.status(200).json(teamsResponse);
	}
}

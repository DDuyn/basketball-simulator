import { Inject, Service } from 'typedi';
import { NotFoundException } from '../../../Domain/Shared/Exceptions/NotFoundException';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import {
	GetTeamsByRegionRequest,
	GetTeamsByRegionSchemaValidation
} from './GetTeamsByRegionRequest';
import { GetTeamsByRegionResponse } from './GetTeamsByRegionResponse';

@Service()
export class GetTeamsByRegion extends Endpoint<GetTeamsByRegionRequest, GetTeamsByRegionResponse> {
	constructor(@Inject() private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.get('/team/by-region/:code', GetTeamsByRegionSchemaValidation);
	}

	async handle(
		request: GetTeamsByRegionRequest,
		response: GetTeamsByRegionResponse
	): Promise<GetTeamsByRegionResponse> {
		const code = request.params.code;

		const teams = await this.dbContext.Teams().findMany({
			where: {
				region: {
					code: code.toUpperCase()
				}
			}
		});

		if (!teams || teams.length == 0) throw new NotFoundException(`${code} has no teams`);

		const teamsResponse: GetTeamsByRegionResponse[] = teams.map((team) => {
			const { id, name, code, flag } = team;

			return { id, name, code, flag } as GetTeamsByRegionResponse;
		});

		return response.status(200).json(teamsResponse);
	}
}

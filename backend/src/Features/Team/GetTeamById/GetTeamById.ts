import { Inject, Service } from 'typedi';
import { NotFoundException } from '../../../Domain/Shared/Exceptions/NotFoundException';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import { GetTeamByIdRequest, GetTeamByIdSchemaValidation } from './GetTeamByIdRequest';
import { GetTeamByIdResponse } from './GetTeamByIdResponse';

@Service()
export class GetTeamById extends Endpoint<GetTeamByIdRequest, GetTeamByIdResponse> {
	constructor(@Inject() private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.get('/team/by-id/:id', GetTeamByIdSchemaValidation);
	}

	async handle(
		request: GetTeamByIdRequest,
		response: GetTeamByIdResponse
	): Promise<GetTeamByIdResponse> {
		const id = request.params.id;

		const team = await this.dbContext.Teams().findFirst({
			where: { id },
			include: { region: true }
		});

		if (!team) throw new NotFoundException(`${id} id team not found`);

		const teamResponse = {
			id: team.id,
			name: team.name,
			code: team.code,
			flag: team.flag,
			regionId: team.region.id,
			regionName: team.region.name
		} as GetTeamByIdResponse;

		return response.status(200).json(teamResponse);
	}
}

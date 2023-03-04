import { Inject, Service } from 'typedi';
import { NotFoundException } from '../../../Domain/Shared/Exceptions/NotFoundException';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import { GetTeamByCodeRequest, GetTeamByCodeSchemaValidation } from './GetTeamByCodeRequest';
import { GetTeamByCodeResponse } from './GetTeamByCodeResponse';

@Service()
export class GetTeamByCode extends Endpoint<GetTeamByCodeRequest, GetTeamByCodeResponse> {
	constructor(@Inject() private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.get('/team/by-code/:code', GetTeamByCodeSchemaValidation);
	}

	async handle(
		request: GetTeamByCodeRequest,
		response: GetTeamByCodeResponse
	): Promise<GetTeamByCodeResponse> {
		const code = request.params.code;

		const team = await this.dbContext.Teams().findFirst({
			where: { code: code.toUpperCase() },
			include: { region: true }
		});

		if (!team) throw new NotFoundException(`${code} team not found`);

		const teamResponse = {
			id: team.id,
			name: team.name,
			code: team.code,
			flag: team.flag,
			regionId: team.region.id,
			regionName: team.region.name
		} as GetTeamByCodeResponse;

		return response.status(200).json(teamResponse);
	}
}

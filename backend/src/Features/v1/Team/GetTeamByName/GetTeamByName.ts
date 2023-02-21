import { Service } from 'typedi';
import { NotFoundException } from '../../../../Domain/Shared/Exceptions/NotFoundException';
import { Endpoint } from '../../../../Infrastructure/Routes/Endpoint';
import { GetTeamByNameRequest, GetTeamByNameSchemaValidation } from './GetTeamByNameRequest';
import { GetTeamByNameResponse } from './GetTeamByNameResponse';

@Service()
export class GetTeamByName extends Endpoint<GetTeamByNameRequest, GetTeamByNameResponse> {
	configure(): void {
		this.get('/team/:name', GetTeamByNameSchemaValidation);
	}

	async handle(
		request: GetTeamByNameRequest,
		response: GetTeamByNameResponse
	): Promise<GetTeamByNameResponse> {
		const name = request.params.name;

		const connection = await this.connection();

		const team = await connection.team.findFirst({
			where: { name },
			include: { region: true }
		});

		if (!team) throw new NotFoundException(`${name} team not found`);

		const teamResponse = {
			id: team.id,
			name: team.name,
			code: team.code,
			regionId: team.region.id,
			regionName: team.region.name
		} as GetTeamByNameResponse;

		return response.status(200).json(teamResponse);
	}
}

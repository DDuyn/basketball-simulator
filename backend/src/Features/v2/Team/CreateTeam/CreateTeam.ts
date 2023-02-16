import { Service } from 'typedi';
import { Endpoint } from '../../../../Infrastructure/Routes/Endpoint';
import { CreateTeamRequest, CreateTeamSchemaValidation } from './CreateTeamRequest';
import { CreateTeamResponse } from './CreateTeamResponse';

@Service()
export class CreateTeam extends Endpoint<CreateTeamRequest, CreateTeamResponse> {
	configure(): void {
		this.post('/team', CreateTeamSchemaValidation);
	}

	async handle(
		request: CreateTeamRequest,
		response: CreateTeamResponse
	): Promise<CreateTeamResponse> {
		const { name, code, regionId } = request.body;

		const connection = await this.connection();
		const teamCreated = await connection.team.create({
			data: { name, code, regionId }
		});

		return response.status(201).json(teamCreated);
	}
}

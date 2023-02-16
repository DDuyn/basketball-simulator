import { Request } from 'express';
import { Service } from 'typedi';
import { Endpoint } from '../../../../Infrastructure/Routes/Endpoint';
import { GetAllTeamsResponse } from './GetAllTeamsResponse';

@Service()
export class GetAllTeams extends Endpoint<Request, GetAllTeamsResponse> {
	configure(): void {
		this.get('/teams');
	}

	async handle(_request: Request, response: GetAllTeamsResponse): Promise<GetAllTeamsResponse> {
		const connection = await this.connection();
		const teams = await connection.team.findMany({
			include: {
				region: true
			}
		});

		const teamsResponse: GetAllTeamsResponse[] = teams.map((team) => {
			const { id, name, code, region } = team;

			return {
				id,
				name,
				code,
				regionId: region.id,
				regionName: region.name
			} as GetAllTeamsResponse;
		});

		return response.status(200).json(teamsResponse);
	}
}

import { Request } from 'express';
import { Inject, Service } from 'typedi';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import { GetAllTeamsResponse } from './GetAllTeamsResponse';

@Service()
export class GetAllTeams extends Endpoint<Request, GetAllTeamsResponse> {
	constructor(@Inject() private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.get('/teams');
	}

	async handle(_request: Request, response: GetAllTeamsResponse): Promise<GetAllTeamsResponse> {
		const teams = await this.dbContext.Teams().findMany({
			include: {
				region: true
			}
		});

		const teamsResponse: GetAllTeamsResponse[] = teams.map((team) => {
			const { id, name, code, flag, region } = team;

			return {
				id,
				name,
				code,
				flag,
				regionId: region.id,
				regionName: region.name
			} as GetAllTeamsResponse;
		});

		return response.status(200).json(teamsResponse);
	}
}

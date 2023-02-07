import { Request, Response } from 'express';
import { Service } from 'typedi';
import { DatabaseContext } from '../../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../../Infrastructure/Routes/Endpoint';
import { GetAllTeamsResponse } from './GetAllTeamsResponse';

@Service()
export class GetAllTeams extends Endpoint {
	constructor(private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.get('/teams');
	}

	async handle(_request: Request, response: Response): Promise<Response> {
		const connection = await this.dbContext.getConnection();
		const teams = await connection.team.findMany({
			include: {
				region: true
			}
		});

		const teamsResponse: GetAllTeamsResponse[] = teams.map((team) => {
			const { id, name, code, region } = team;

			return { id, name, code, regionId: region.id, regionName: region.name };
		});

		return response.status(200).json(teamsResponse);
	}
}

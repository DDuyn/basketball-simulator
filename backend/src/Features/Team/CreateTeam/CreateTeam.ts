import { randomUUID } from 'crypto';
import { Inject, Service } from 'typedi';
import { Team } from '../../../Domain/Team/Team';
import { TeamCode } from '../../../Domain/Team/TeamCode';
import { TeamFlag } from '../../../Domain/Team/TeamFlag';
import { TeamId } from '../../../Domain/Team/TeamId';
import { TeamName } from '../../../Domain/Team/TeamName';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import { CreateTeamRequest, CreateTeamSchemaValidation } from './CreateTeamRequest';
import { CreateTeamResponse } from './CreateTeamResponse';

@Service()
export class CreateTeam extends Endpoint<CreateTeamRequest, CreateTeamResponse> {
	constructor(@Inject() private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.post('/team', CreateTeamSchemaValidation);
	}

	async handle(
		request: CreateTeamRequest,
		response: CreateTeamResponse
	): Promise<CreateTeamResponse> {
		const { name, code, flag, region } = request.body;

		const team = new Team(
			new TeamId(randomUUID()),
			new TeamName(name),
			new TeamCode(code),
			new TeamFlag(flag),
			region
		);

		const teamCreated = await this.dbContext.Teams().create({
			data: {
				id: team.id.value,
				name: team.name.value,
				code: team.code.value,
				flag: team.flag.value,
				regionId: team.region.id.value
			}
		});

		return response.status(201).json(teamCreated);
	}
}

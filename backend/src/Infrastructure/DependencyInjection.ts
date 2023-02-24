import 'reflect-metadata';
import Container from 'typedi';
import { CreateRegion } from '../Features/Region/CreateRegion/CreateRegion';
import { GetAllRegions } from '../Features/Region/GetAllRegions/GetAllRegions';
import { CreateTeam } from '../Features/Team/CreateTeam/CreateTeam';
import { GetAllTeams } from '../Features/Team/GetAllTeams/GetAllTeams';
import { GetTeamByName } from '../Features/Team/GetTeamByName/GetTeamByName';
import { GetTeamsByRegion } from '../Features/Team/GetTeamsByRegion/GetTeamsByRegion';
import { Logger } from './Logging/Logger';
import { DatabaseContext } from './Persistence/Context/DatabaseContext';

export const registerDbContext = async () => {
	await Container.get(DatabaseContext);
};

export const registerUseCases = async () => {
	//Region
	await Container.get(CreateRegion);
	await Container.get(GetAllRegions);

	//Team
	await Container.get(CreateTeam);
	await Container.get(GetAllTeams);
	await Container.get(GetTeamByName);
	await Container.get(GetTeamsByRegion);
};

export const registerLogger = async () => {
	Logger.configure();
};

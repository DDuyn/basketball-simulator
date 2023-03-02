import 'reflect-metadata';
import Container from 'typedi';
import { CreateRegion } from '../Features/Region/CreateRegion/CreateRegion';
import { GetAllRegions } from '../Features/Region/GetAllRegions/GetAllRegions';
import { GetRegionByCode } from '../Features/Region/GetRegionByCode/GetRegionByCode';
import { GetRegionById } from '../Features/Region/GetRegionById/GetRegionById';
import { CreateTeam } from '../Features/Team/CreateTeam/CreateTeam';
import { GetAllTeams } from '../Features/Team/GetAllTeams/GetAllTeams';
import { GetTeamByCode } from '../Features/Team/GetTeamByCode/GetTeamByCode';
import { GetTeamById } from '../Features/Team/GetTeamById/GetTeamById';
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
	await Container.get(GetRegionById);
	await Container.get(GetRegionByCode);

	//Team
	await Container.get(CreateTeam);
	await Container.get(GetAllTeams);
	await Container.get(GetTeamByCode);
	await Container.get(GetTeamsByRegion);
	await Container.get(GetTeamById);
};

export const registerLogger = async () => {
	Logger.configure();
};

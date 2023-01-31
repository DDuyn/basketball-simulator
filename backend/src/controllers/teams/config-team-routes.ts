import { Hono } from 'hono';
import Container from 'typedi';
import { Controller } from '../controller';
import { GetTeamsController } from './get-teams-controller';

const teamsController: Controller[] = [Container.get(GetTeamsController)];

export const initTeamRoutes = (app: Hono) => {
	for (const controller of teamsController) {
		controller.init(app);
	}
};

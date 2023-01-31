import { Hono } from 'hono';
import { initTeamRoutes } from './teams/config-team-routes';

export const configControllers = (app: Hono) => {
	initTeamRoutes(app);
};

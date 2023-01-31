import { Hono } from 'hono';
import { Service } from 'typedi';
import { Controller } from '../controller';

@Service()
export class GetTeamsController implements Controller {
	async run() {
		const teams = [
			{
				teamId: '1',
				name: 'Spain',
				shortName: 'SPA'
			},
			{
				teamId: '2',
				name: 'Argentina',
				shortName: 'ARG'
			}
		];
		return teams;
	}

	init(app: Hono): void {
		app.get('/teams', async (ctx) => {
			const teams = await this.run();
			return ctx.json(teams, 200);
		});
	}
}

import 'reflect-metadata';

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { configControllers } from './controllers/config-controllers';

export class App {
	private static app: Hono = new Hono();

	public static init() {
		this.initMiddleware();
		this.initRoutes();
		this.initControllers();

		return this.app;
	}

	private static initMiddleware() {
		this.app.use('*', cors());
		this.app.use('*', logger());
	}

	private static initControllers() {
		configControllers(this.app);
	}

	private static initRoutes() {
		this.app.get('/health', (ctx) => ctx.text('200'));
	}
}

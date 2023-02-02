import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import Container from 'typedi';
import { ConfigControllers } from './controllers/config-controllers';

export class App {
	private static app: express.Application;

	public static init() {
		this.app = express();
		this.initMiddleware();
		this.initRoutes();
		this.initControllers();

		return this.app;
	}

	private static initMiddleware() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}

	private static initControllers() {
		const c = Container.get(ConfigControllers);
		c.run(this.app);
	}

	private static initRoutes() {
		this.app.get('/health', (req, res) => res.status(200).send());
	}
}

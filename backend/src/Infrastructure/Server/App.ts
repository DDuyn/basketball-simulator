import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import Container from 'typedi';
import { InitializeRouters } from '../Routes/InitializeRouters';

export class App {
	private static app: express.Application;

	public static init() {
		this.app = express();
		this.initMiddleware();
		this.initRoutes();

		return this.app;
	}

	private static initMiddleware() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}

	private static initRoutes() {
		const configRouter = Container.get(InitializeRouters);
		configRouter.run(this.app);
		this.app.get('/api/health', (req, res) => res.status(200).send());
	}
}

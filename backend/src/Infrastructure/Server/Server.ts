import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import Container, { Service } from 'typedi';
import { Logger } from '../Logging/Logger';

import { HandleExceptionMiddleware } from '../Middleware/HandleExceptionMiddleware';
import { LoggerMiddleware } from '../Middleware/LoggerMiddleware';
import { RegisterEndpoints } from '../Routes/RegisterEndpoints';

@Service()
export class Server {
	private app: express.Application;

	constructor(
		private readonly logger: LoggerMiddleware,
		private readonly handleException: HandleExceptionMiddleware
	) {
		this.app = express();
		this.initLogger();
		this.initRoutes();
		this.initMiddleware();
	}

	public init() {
		this.app.listen(3000, () => {
			console.log(`App listening on the port ${3000}`);
		});
	}

	private initLogger() {
		Logger.configure();
	}

	private initMiddleware() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(this.logger.run);
	}

	private async initRoutes() {
		const registerEndpoints = Container.get(RegisterEndpoints);
		await registerEndpoints.run(this.app);
		this.app.get('/api/health', (_req, res) => res.status(200).send());
		this.app.use(this.handleException.run);
	}
}

import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import { Service } from 'typedi';

import { HandleExceptionMiddleware } from '../Middleware/HandleExceptionMiddleware';
import { LoggerMiddleware } from '../Middleware/LoggerMiddleware';
import { RegisterEndpoints } from '../Routes/RegisterEndpoints';

@Service()
export class Server {
	private app: express.Application;

	constructor(
		private readonly loggerMiddleware: LoggerMiddleware,
		private readonly handleExceptionMiddleware: HandleExceptionMiddleware,
		private readonly registerEndpoints: RegisterEndpoints
	) {
		this.app = express();
		this.initRoutes();
		this.initMiddleware();
	}

	public init() {
		this.app.listen(3000, () => {
			console.log(`App listening on the port ${3000}`);
		});
	}

	private initMiddleware() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(this.loggerMiddleware.run);
	}

	private async initRoutes() {
		await this.registerEndpoints.run(this.app);
		this.app.get('/api/health', (_req, res) => res.status(200).send());
		this.app.use(this.handleExceptionMiddleware.run);
	}
}

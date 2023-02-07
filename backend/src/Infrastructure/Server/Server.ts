import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import Container, { Service } from 'typedi';
import { Logger } from '../Logging/Logger';
import { LoggerMiddleware } from '../Middleware/LoggerMiddleware';
import { RegisterEndpoints } from '../Routes/RegisterEndpoints';

@Service()
export class Server {
	private app: express.Application;

	constructor(private readonly logger: LoggerMiddleware) {
		this.app = express();
		this.initLogger();
		this.initMiddleware();
		this.initRoutes();
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

	private initRoutes() {
		const registerEndpoints = Container.get(RegisterEndpoints);
		registerEndpoints.run(this.app);
		this.app.get('/api/health', (req, res) => res.status(200).send());
	}
}

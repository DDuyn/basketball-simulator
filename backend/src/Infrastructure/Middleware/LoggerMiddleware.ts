import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';
import { Logger } from '../Logging/Logger';

@Service()
export class LoggerMiddleware {
	run(request: Request, response: Response, next: NextFunction) {
		const startRequest = Date.now();
		const urlRequest = request.url;

		response.on('finish', () => {
			const finishRequest = Date.now() - startRequest;
			Logger.info(
				`[${new Date().toISOString().slice(0, 19).replace('T', ' ')}] --> Method: ${
					request.method
				} Endpoint: ${urlRequest} ResponseTime: ${finishRequest}ms`
			);
		});

		next();
	}
}

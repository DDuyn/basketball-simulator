import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';
import { Exception } from '../Errors/Exception';
import { Logger } from '../Logging/Logger';

@Service()
export class HandleExceptionMiddleware {
	run(error: Exception, _request: Request, response: Response, next: NextFunction) {
		if (error instanceof Exception) {
			Logger.error(
				JSON.stringify({ type: error.type, status: error.status, message: error.message })
			);

			response.status(error.status).json({
				type: error.type,
				status: error.status,
				message: error.message
			});
		}

		response.status(500).json(error.message);
	}
}

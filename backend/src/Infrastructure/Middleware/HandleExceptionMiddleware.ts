import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';
import { Exception } from '../../Domain/Shared/Exceptions/Exception';
import { Logger } from '../Logging/Logger';

@Service()
export class HandleExceptionMiddleware {
	run(error: any, _request: Request, response: Response, _next: NextFunction) {
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

		if (error instanceof PrismaClientKnownRequestError) {
			Logger.error(
				JSON.stringify({
					type: 'PrismaException',
					status: 500,
					code: error.code,
					meta: error.meta,
					message: error.message
				})
			);

			response.status(500).json({
				type: 'PrismaException',
				status: 500,
				code: error.code,
				message: error.message,
				metadata: error.meta
			});
		}

		if (error instanceof Error) {
			response.status(500).json(error.message);
		}
	}
}

import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Logger } from '../Logging/Logger';

export class RequestValidatorMiddleware {
	static run(request: Request, response: Response, next: NextFunction) {
		const errors = validationResult(request);
		if (!errors.isEmpty()) {
			const extractedErrors = errors.array().map((error) => {
				return { Field: error.param, Message: error.msg, Value: error.value };
			});
			Logger.error(JSON.stringify(extractedErrors));
			return response.status(400).json({ errors: extractedErrors });
		}
		return next();
	}
}

import { Request } from 'express';
import { param } from 'express-validator';
import { SchemaValidation } from '../../../Infrastructure/Types/SchemaValidation';

export interface GetTeamByCodeRequest extends Request {
	params: {
		code: string;
	};
}

export const GetTeamByCodeSchemaValidation: SchemaValidation = [
	param('code')
		.isAlpha()
		.withMessage('The code must be string')
		.isLength({ max: 3 })
		.withMessage('The length of code must be three characters')
];

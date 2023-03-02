import { Request } from 'express';
import { param } from 'express-validator';
import { SchemaValidation } from '../../../Infrastructure/Types/SchemaValidation';

export interface GetRegionByCodeRequest extends Request {
	params: {
		code: string;
	};
}

export const GetRegionByCodeSchemaValidation: SchemaValidation = [
	param('code')
		.isAlpha()
		.withMessage('The code must be string')
		.isLength({ max: 2 })
		.withMessage('The length of code must be two characters')
];

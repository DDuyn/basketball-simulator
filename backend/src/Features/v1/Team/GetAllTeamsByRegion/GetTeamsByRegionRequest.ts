import { Request } from 'express';
import { param } from 'express-validator';
import { SchemaValidation } from '../../../../Infrastructure/Types/SchemaValidation';

export interface GetTeamsByRegionRequest extends Request {
	params: {
		code: string;
	};
}

export const GetTeamsByRegionSchemaValidation: SchemaValidation = [
	param('code')
		.isAlpha()
		.withMessage('The region must be string')
		.isLength({ min: 2, max: 3 })
		.withMessage('The region code is not valid')
];

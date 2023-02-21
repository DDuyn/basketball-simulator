import { Request } from 'express';
import { param } from 'express-validator';
import { SchemaValidation } from '../../../../Infrastructure/Types/SchemaValidation';

export interface GetTeamByNameRequest extends Request {
	params: {
		name: string;
	};
}

export const GetTeamByNameSchemaValidation: SchemaValidation = [
	param('name').isAlpha().withMessage('The name must be string')
];

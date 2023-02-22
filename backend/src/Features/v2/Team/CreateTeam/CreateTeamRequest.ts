import { Request } from 'express';
import { body } from 'express-validator';
import { SchemaValidation } from '../../../../Infrastructure/Types/SchemaValidation';

export interface CreateTeamRequest extends Request {
	body: {
		name: string;
		code: string;
		flag: string;
		regionId: string;
	};
}

export const CreateTeamSchemaValidation: SchemaValidation = [
	body('name')
		.notEmpty()
		.withMessage('The name is required')
		.isString()
		.withMessage('The name must be a string'),
	body('code')
		.notEmpty()
		.withMessage('The code is requireD')
		.isString()
		.withMessage('The code must be a string')
];

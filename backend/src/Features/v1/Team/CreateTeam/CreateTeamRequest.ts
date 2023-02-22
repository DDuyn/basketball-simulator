import { Request } from 'express';
import { body } from 'express-validator';
import { Region } from '../../../../Domain/Region/Region';
import { SchemaValidation } from '../../../../Infrastructure/Types/SchemaValidation';

export interface CreateTeamRequest extends Request {
	body: {
		name: string;
		code: string;
		region: Region;
	};
}

export const CreateTeamSchemaValidation: SchemaValidation = [
	body('name')
		.exists()
		.notEmpty()
		.withMessage('The name is required')
		.isString()
		.withMessage('The name must be a string'),
	body('code')
		.exists()
		.notEmpty()
		.withMessage('The code is requireD')
		.isString()
		.withMessage('The code must be a string')
		.isLength({ min: 3, max: 3 })
		.withMessage('The length of code must be three characters'),
	body('region.id')
		.exists()
		.withMessage('The property region.id is required')
		.notEmpty()
		.withMessage('The regionId is required')
		.isUUID()
		.withMessage('The regionId must be uuid valid')
];

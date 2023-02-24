import { Request } from 'express';
import { body } from 'express-validator';
import { Region } from '../../../../Domain/Region/Region';
import { SchemaValidation } from '../../../../Infrastructure/Types/SchemaValidation';

export interface CreateTeamRequest extends Request {
	body: {
		name: string;
		code: string;
		flag: string;
		region: Region;
	};
}

export const CreateTeamSchemaValidation: SchemaValidation = [
	body('name')
		.notEmpty()
		.withMessage('The name is required')
		.isAlpha()
		.withMessage('The name must be a string'),
	body('code')
		.notEmpty()
		.withMessage('The code is requireD')
		.isAlpha()
		.withMessage('The code must be a string')
		.isLength({ min: 3, max: 3 })
		.withMessage('The length of code must be three characters'),
	body('region.id')
		.notEmpty()
		.withMessage('The regionId is required')
		.isUUID()
		.withMessage('The regionId must be uuid valid')
];

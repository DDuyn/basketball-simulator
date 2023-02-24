import { Request } from 'express';
import { body } from 'express-validator';
import { SchemaValidation } from '../../../Infrastructure/Types/SchemaValidation';

export interface CreateRegionRequest extends Request {
	body: {
		name: string;
		code: string;
	};
}

export const CreateRegionSchemaValidation: SchemaValidation = [
	body('name')
		.notEmpty()
		.withMessage('The name is required')
		.isAlpha()
		.withMessage('The name must be a string'),
	body('code')
		.notEmpty()
		.withMessage('The code is required')
		.isAlpha()
		.withMessage('The code must be a string')
		.isLength({ min: 2, max: 3 })
		.withMessage('The length of code must be three characters')
];

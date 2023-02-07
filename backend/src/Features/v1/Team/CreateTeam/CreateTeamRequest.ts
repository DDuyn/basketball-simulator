import { body } from 'express-validator';

export interface CreateTeamRequest {
	name: string;
	code: string;
	regionId: string;
}

export const CreateTeamRequestRules = [
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

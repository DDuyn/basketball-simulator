import { Request } from 'express';
import { param } from 'express-validator';
import { SchemaValidation } from '../../../Infrastructure/Types/SchemaValidation';

export interface GetRegionByIdRequest extends Request {
	params: {
		id: string;
	};
}

export const GetRegionByIdSchemaValidation: SchemaValidation = [
	param('id').isUUID().withMessage('The id must be uuid valid')
];

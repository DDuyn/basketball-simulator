import { Request } from 'express';

export interface CreateRegionRequest extends Request {
	name: string;
	code: string;
}

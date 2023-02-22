import { Response } from 'express';

export interface GetAllRegionsResponse extends Response {
	id: string;
	name: string;
	code: string;
}

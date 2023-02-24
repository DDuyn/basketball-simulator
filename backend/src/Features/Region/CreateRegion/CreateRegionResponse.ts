import { Response } from 'express';

export interface CreateRegionResponse extends Response {
	id: string;
	name: string;
	code: string;
}

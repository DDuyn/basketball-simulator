import { Response } from 'express';

export interface GetRegionByIdResponse extends Response {
	id: string;
	name: string;
	code: string;
}

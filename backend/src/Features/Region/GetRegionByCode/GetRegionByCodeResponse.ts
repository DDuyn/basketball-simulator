import { Response } from 'express';

export interface GetRegionByCodeResponse extends Response {
	id: string;
	name: string;
	code: string;
}

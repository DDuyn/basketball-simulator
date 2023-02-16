import { Response } from 'express';

export interface GetAllTeamsResponse extends Response {
	id: string;
	name: string;
	code: string;
	regionId: string;
	regionName: string;
}

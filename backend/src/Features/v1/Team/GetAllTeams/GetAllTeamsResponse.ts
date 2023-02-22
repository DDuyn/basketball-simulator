import { Response } from 'express';

export interface GetAllTeamsResponse extends Response {
	id: string;
	name: string;
	code: string;
	flag: string;
	regionId: string;
	regionName: string;
}

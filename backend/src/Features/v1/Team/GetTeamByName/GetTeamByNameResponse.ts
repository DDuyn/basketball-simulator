import { Response } from 'express';

export interface GetTeamByNameResponse extends Response {
	id: string;
	name: string;
	code: string;
	regionId: string;
	regionName: string;
}

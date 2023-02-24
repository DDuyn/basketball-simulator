import { Response } from 'express';

export interface GetTeamsByRegionResponse extends Response {
	id: string;
	name: string;
	code: string;
	flag: string;
}

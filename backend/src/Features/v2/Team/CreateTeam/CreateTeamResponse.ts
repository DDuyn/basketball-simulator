import { Response } from 'express';

export interface CreateTeamResponse extends Response {
	id: string;
	name: string;
	code: string;
	flag: string;
	regionId: string;
}

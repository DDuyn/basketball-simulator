import express, { Request, Response } from 'express';
import { Service } from 'typedi';
import { Endpoint, RegisterEndpoint } from '../../Infrastructure/Routes/Endpoint';
import { CreateRegion } from './Region/CreateRegion/CreateRegion';
import { CreateTeam } from './Team/CreateTeam/CreateTeam';
import { GetAllTeams } from './Team/GetAllTeams/GetAllTeams';
import { GetTeamByName } from './Team/GetTeamByName/GetTeamByName';

@Service()
export class EndpointsV1 implements RegisterEndpoint {
	private endpoints: Endpoint<Request, Response>[];

	constructor(
		private readonly createTeam: CreateTeam,
		private readonly getAllTeams: GetAllTeams,
		private readonly getTeamByName: GetTeamByName,
		private readonly createRegion: CreateRegion
	) {
		this.endpoints = [this.createTeam, this.getAllTeams, this.createRegion, this.getTeamByName];
	}

	async registerEndpoints(app: express.Application) {
		for (const endpoint of this.endpoints) {
			app.use('/api/v1/', await endpoint.register());
		}
	}
}

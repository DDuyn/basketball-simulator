import express, { Request, Response } from 'express';
import { Service } from 'typedi';
import { Endpoint, RegisterEndpoint } from '../../Infrastructure/Routes/Endpoint';
import { CreateTeam } from './Team/CreateTeam/CreateTeam';

@Service()
export class EndpointsV2 implements RegisterEndpoint {
	private endpoints: Endpoint<Request, Response>[];

	constructor(private readonly createTeam: CreateTeam) {
		this.endpoints = [this.createTeam];
	}

	async registerEndpoints(app: express.Application) {
		for (const endpoint of this.endpoints) {
			app.use('/api/v2/', await endpoint.register());
		}
	}
}

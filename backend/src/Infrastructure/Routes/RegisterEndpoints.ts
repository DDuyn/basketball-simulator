import express from 'express';
import { Service } from 'typedi';
import { EndpointsV1 } from '../../Features/v1/EndpointsV1';
import { EndpointsV2 } from '../../Features/v2/EndpointsV2';
import { RegisterEndpoint } from './Endpoint';

@Service()
export class RegisterEndpoints {
	private routers: RegisterEndpoint[] = [];

	constructor(private readonly v1: EndpointsV1, private readonly v2: EndpointsV2) {
		this.routers = [this.v1, this.v2];
	}

	async run(app: express.Application) {
		for (const route of this.routers) {
			await route.registerEndpoints(app);
		}
	}
}

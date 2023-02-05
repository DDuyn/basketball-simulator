import { Request, Response } from 'express';
import { Service } from 'typedi';
import { Router } from '../../../Infrastructure/Routes/Router';
import { CreateRegion } from './CreateRegion/CreateRegion';

@Service()
export class RouterRegionV1 extends Router {
	constructor(private readonly createRegion: CreateRegion) {
		super();
	}

	configure(): void {
		this.route.post('/region', (request: Request, response: Response) =>
			this.createRegion.run(request, response)
		);
	}
}

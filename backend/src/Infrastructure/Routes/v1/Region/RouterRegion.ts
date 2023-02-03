import { Request, Response } from 'express';
import { Service } from 'typedi';
import { CreateRegion } from '../../../../Features/Region/CreateRegion/CreateRegion';
import { Router } from '../../Router';

@Service()
export class RouterRegionV1 extends Router {
	constructor(private readonly createRegion: CreateRegion) {
		super();
	}

	init(): void {
		this.route.post('/region', (request: Request, response: Response) =>
			this.createRegion.run(request, response)
		);
	}
}

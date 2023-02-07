import { Request, Response } from 'express';
import { Service } from 'typedi';
import { Endpoint } from '../../../../Infrastructure/Routes/Endpoint';
import { CreateRegionRequest } from './CreateRegionRequest';
import { CreateRegionResponse } from './CreateRegionResponse';

@Service()
export class CreateRegion extends Endpoint<Request, Response> {
	configure(): void {
		this.post('/region');
	}

	async handle(request: Request, response: Response): Promise<Response> {
		const region: CreateRegionRequest = request.body;
		const connection = await this.connection();
		const regionCreated: CreateRegionResponse = await connection.region.create({ data: region });

		return response.status(201).json(regionCreated);
	}
}

import { Request, Response } from 'express';
import { Service } from 'typedi';
import { DatabaseContext } from '../../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../../Infrastructure/Routes/Endpoint';
import { CreateRegionRequest } from './CreateRegionRequest';
import { CreateRegionResponse } from './CreateRegionResponse';

@Service()
export class CreateRegion extends Endpoint {
	constructor(private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.post('/region');
	}

	async handle(request: Request, response: Response): Promise<Response> {
		const region: CreateRegionRequest = request.body;
		const connection = await this.dbContext.getConnection();
		const regionCreated: CreateRegionResponse = await connection.region.create({ data: region });

		return response.status(201).json(regionCreated);
	}
}

import { Request, Response } from 'express';
import { Service } from 'typedi';
import { DatabaseContext } from '../../../../Infrastructure/Persistence/Context/DatabaseContext';
import { CreateRegionRequest } from './CreateRegionRequest';
import { CreateRegionResponse } from './CreateRegionResponse';

@Service()
export class CreateRegion {
	constructor(private readonly dbContext: DatabaseContext) {}

	async run(request: Request, response: Response) {
		const region: CreateRegionRequest = request.body;
		const connection = await this.dbContext.getConnection();
		const regionCreated: CreateRegionResponse = await connection.region.create({ data: region });

		return response.status(201).json(regionCreated);
	}
}

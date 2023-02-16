import { Service } from 'typedi';
import { Endpoint } from '../../../../Infrastructure/Routes/Endpoint';
import { CreateRegionRequest } from './CreateRegionRequest';
import { CreateRegionResponse } from './CreateRegionResponse';

@Service()
export class CreateRegion extends Endpoint<CreateRegionRequest, CreateRegionResponse> {
	configure(): void {
		this.post('/region');
	}

	async handle(
		request: CreateRegionRequest,
		response: CreateRegionResponse
	): Promise<CreateRegionResponse> {
		const region: CreateRegionRequest = request.body;
		const connection = await this.connection();
		const regionCreated = await connection.region.create({ data: region });

		return response.status(201).json(regionCreated);
	}
}

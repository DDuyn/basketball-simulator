import { Request } from 'express';
import { Service } from 'typedi';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import { GetAllRegionsResponse } from './GetAllRegionsResponse';

@Service()
export class GetAllRegions extends Endpoint<Request, GetAllRegionsResponse> {
	configure(): void {
		this.get('/regions');
	}

	async handle(_request: Request, response: GetAllRegionsResponse): Promise<GetAllRegionsResponse> {
		const connection = await this.connection();
		const regions = await connection.region.findMany();

		return response.status(200).json(regions);
	}
}

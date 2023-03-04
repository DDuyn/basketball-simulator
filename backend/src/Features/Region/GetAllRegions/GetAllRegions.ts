import { Request } from 'express';
import { Inject, Service } from 'typedi';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import { GetAllRegionsResponse } from './GetAllRegionsResponse';

@Service()
export class GetAllRegions extends Endpoint<Request, GetAllRegionsResponse> {
	constructor(@Inject() private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.get('/regions');
	}

	async handle(_request: Request, response: GetAllRegionsResponse): Promise<GetAllRegionsResponse> {
		const regions = await this.dbContext.Regions().findMany();

		return response.status(200).json(regions);
	}
}

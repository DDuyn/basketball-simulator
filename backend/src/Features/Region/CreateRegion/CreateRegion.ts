import { randomUUID } from 'crypto';
import { Inject, Service } from 'typedi';
import { Region } from '../../../Domain/Region/Region';
import { RegionCode } from '../../../Domain/Region/RegionCode';
import { RegionId } from '../../../Domain/Region/RegionId';
import { RegionName } from '../../../Domain/Region/RegionName';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import { CreateRegionRequest, CreateRegionSchemaValidation } from './CreateRegionRequest';
import { CreateRegionResponse } from './CreateRegionResponse';

@Service()
export class CreateRegion extends Endpoint<CreateRegionRequest, CreateRegionResponse> {
	constructor(@Inject() private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.post('/region', CreateRegionSchemaValidation);
	}

	async handle(
		request: CreateRegionRequest,
		response: CreateRegionResponse
	): Promise<CreateRegionResponse> {
		const { name, code } = request.body;

		const region = new Region(
			new RegionId(randomUUID()),
			new RegionName(name),
			new RegionCode(code)
		);

		const regionCreated = await this.dbContext.Regions().create({
			data: { id: region.id.value, name: region.name.value, code: region.code.value }
		});

		return response.status(201).json(regionCreated);
	}
}

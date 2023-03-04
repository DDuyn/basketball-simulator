import { Inject, Service } from 'typedi';
import { NotFoundException } from '../../../Domain/Shared/Exceptions/NotFoundException';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import { GetRegionByIdRequest, GetRegionByIdSchemaValidation } from './GetRegionByIdRequest';
import { GetRegionByIdResponse } from './GetRegionByIdResponse';

@Service()
export class GetRegionById extends Endpoint<GetRegionByIdRequest, GetRegionByIdResponse> {
	constructor(@Inject() private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.get('/region/by-id/:id', GetRegionByIdSchemaValidation);
	}

	async handle(
		request: GetRegionByIdRequest,
		response: GetRegionByIdResponse
	): Promise<GetRegionByIdResponse> {
		const id = request.params.id;

		const region = await this.dbContext.Regions().findFirst({ where: { id } });

		if (!region) throw new NotFoundException(`${id} id region not found`);

		return response.status(200).json(region);
	}
}

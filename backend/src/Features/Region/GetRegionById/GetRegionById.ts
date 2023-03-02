import { Service } from 'typedi';
import { NotFoundException } from '../../../Domain/Shared/Exceptions/NotFoundException';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import { GetRegionByIdRequest, GetRegionByIdSchemaValidation } from './GetRegionByIdRequest';
import { GetRegionByIdResponse } from './GetRegionByIdResponse';

@Service()
export class GetRegionById extends Endpoint<GetRegionByIdRequest, GetRegionByIdResponse> {
	configure(): void {
		this.get('/region/by-id/:id', GetRegionByIdSchemaValidation);
	}

	async handle(
		request: GetRegionByIdRequest,
		response: GetRegionByIdResponse
	): Promise<GetRegionByIdResponse> {
		const id = request.params.id;

		const connection = await this.connection();

		const region = await connection.region.findFirst({ where: { id } });

		if (!region) throw new NotFoundException(`${id} id region not found`);

		return response.status(200).json(region);
	}
}

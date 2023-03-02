import { Service } from 'typedi';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import { GetRegionByCodeRequest, GetRegionByCodeSchemaValidation } from './GetRegionByCodeRequest';
import { GetRegionByCodeResponse } from './GetRegionByCodeResponse';

@Service()
export class GetRegionByCode extends Endpoint<GetRegionByCodeRequest, GetRegionByCodeResponse> {
	configure(): void {
		this.get('/region/by-code/:code', GetRegionByCodeSchemaValidation);
	}

	async handle(
		request: GetRegionByCodeRequest,
		response: GetRegionByCodeResponse
	): Promise<GetRegionByCodeResponse> {
		const code = request.params.code;

		const connection = await this.connection();

		const region = await connection.region.findFirst({
			where: {
				code: code.toUpperCase()
			}
		});

		return response.status(200).json(region);
	}
}

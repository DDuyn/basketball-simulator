import { Inject, Service } from 'typedi';
import { DatabaseContext } from '../../../Infrastructure/Persistence/Context/DatabaseContext';
import { Endpoint } from '../../../Infrastructure/Routes/Endpoint';
import { GetRegionByCodeRequest, GetRegionByCodeSchemaValidation } from './GetRegionByCodeRequest';
import { GetRegionByCodeResponse } from './GetRegionByCodeResponse';

@Service()
export class GetRegionByCode extends Endpoint<GetRegionByCodeRequest, GetRegionByCodeResponse> {
	constructor(@Inject() private readonly dbContext: DatabaseContext) {
		super();
	}

	configure(): void {
		this.get('/region/by-code/:code', GetRegionByCodeSchemaValidation);
	}

	async handle(
		request: GetRegionByCodeRequest,
		response: GetRegionByCodeResponse
	): Promise<GetRegionByCodeResponse> {
		const code = request.params.code;

		const region = await (
			await this.dbContext.Regions()
		).findFirst({
			where: {
				code: code.toUpperCase()
			}
		});

		return response.status(200).json(region);
	}
}

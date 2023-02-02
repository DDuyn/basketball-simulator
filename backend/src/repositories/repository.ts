import { Database } from '../database';

export abstract class Repository {
	protected connection: any;

	public async init() {
		this.connection = await Database.getConnection();
	}
}

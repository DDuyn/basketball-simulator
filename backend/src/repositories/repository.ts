import { PrismaClient } from '@prisma/client';
import { Database } from '../database/index';
export abstract class Repository {
	protected connection: PrismaClient;

	constructor() {
		this.connection = Database.getConnection();
	}
}

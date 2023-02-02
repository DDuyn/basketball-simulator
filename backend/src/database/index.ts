import { PrismaClient } from '@prisma/client';

export class Database {
	private static DB: PrismaClient;

	static async connect() {
		try {
			this.DB = new PrismaClient({ log: ['query'] });
			console.log('Connected to the database');
		} catch (error: any) {
			throw new Error(error);
		}
	}

	static async getConnection(): Promise<PrismaClient> {
		return this.DB;
	}
}

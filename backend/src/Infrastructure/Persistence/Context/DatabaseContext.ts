import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';

@Service()
export class DatabaseContext {
	private static instance: DatabaseContext;
	private connection: PrismaClient;

	private constructor() {
		try {
			this.connection = new PrismaClient({ log: ['query'] });
			console.log('Connected to the database');
		} catch (error: any) {
			throw new Error(error);
		}
	}

	static getInstance(): DatabaseContext {
		if (!DatabaseContext.instance) DatabaseContext.instance = new DatabaseContext();

		return DatabaseContext.instance;
	}

	async getConnection(): Promise<PrismaClient> {
		return this.connection;
	}
}

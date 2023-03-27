import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';

@Service()
export class DatabaseContext {
	private connection: PrismaClient;

	constructor() {
		try {
			this.connection = new PrismaClient({ log: ['query'] });
			console.log('Connected to the database');
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async getConnection(): Promise<PrismaClient> {
		return this.connection;
	}

	Regions() {
		return this.connection.regions;
	}

	Teams() {
		return this.connection.teams;
	}
}

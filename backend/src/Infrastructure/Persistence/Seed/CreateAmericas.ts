import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const AMERICAS = {
	id: randomUUID(),
	name: 'Americas',
	code: 'AM'
};

const COUNTRIES = [
	{ id: randomUUID(), name: 'Antigua and Barbuda', code: 'ANT', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Argentina', code: 'ARG', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Aruba', code: 'ARU', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Bahamas', code: 'BAH', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Barbados', code: 'BAR', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Belize', code: 'BIZ', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Bermuda', code: 'BER', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Bolivia', code: 'BOL', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Brazil', code: 'BRA', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'British Virgin Islands', code: 'IVB', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Canada', code: 'CAN', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Cayman Islands', code: 'CAY', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Chile', code: 'CHI', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Colombia', code: 'COL', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Costa Rica', code: 'CRC', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Cuba', code: 'CUB', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Dominica', code: 'DMA', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Dominican Republic', code: 'DOM', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Ecuador', code: 'ECU', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'El Salvador', code: 'ESA', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Grenada', code: 'GRN', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Guatemala', code: 'GUA', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Guyana', code: 'GUY', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Haiti', code: 'HAI', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Honduras', code: 'HON', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Jamaica', code: 'JAM', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Mexico', code: 'MEX', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Montserrat', code: 'MAT', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Nicaragua', code: 'NCA', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Panama', code: 'PAN', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Paraguay', code: 'PAR', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Puerto Rico', code: 'PUR', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'St. Kitts', code: 'SKN', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'St. Lucia', code: 'LCA', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'St.Vincent and the Grenadines', code: 'VIN', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Suriname', code: 'SUR', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Trinidad and Tobago', code: 'TTO', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Turks and Caicos Islands', code: 'TCI', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Uruguay', code: 'URU', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'USA', code: 'USA', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Venezuela', code: 'VEN', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Virgin Islands', code: 'ISV', regionId: AMERICAS.id }
];

export const createAmericas = async (db: PrismaClient) => {
	console.log(`Creating AMERICAS region`);
	await db.region.create({ data: AMERICAS });

	for (const country of COUNTRIES) {
		console.log(`Inserting ${country.name}`);
		await db.team.create({ data: country });
		console.log(`${country.name} inserted successfully`);
	}

	console.log('AMERICAS region Created');
};

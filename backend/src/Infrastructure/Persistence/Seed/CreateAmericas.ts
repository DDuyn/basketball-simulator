import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const AMERICAS = {
	id: randomUUID(),
	name: 'Americas',
	code: 'AM'
};

const COUNTRIES = [
	{ id: randomUUID(), name: 'Antigua and Barbuda', code: 'ANT', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Argentina', code: 'ARG', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Aruba', code: 'ARU', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Bahamas', code: 'BAH', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Barbados', code: 'BAR', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Belize', code: 'BIZ', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Bermuda', code: 'BER', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Bolivia', code: 'BOL', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Brazil', code: 'BRA', flag: '', regionId: AMERICAS.id },
	{
		id: randomUUID(),
		name: 'British Virgin Islands',
		code: 'IVB',
		flag: '',
		regionId: AMERICAS.id
	},
	{ id: randomUUID(), name: 'Canada', code: 'CAN', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Cayman Islands', code: 'CAY', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Chile', code: 'CHI', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Colombia', code: 'COL', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Costa Rica', code: 'CRC', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Cuba', code: 'CUB', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Dominica', code: 'DMA', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Dominican Republic', code: 'DOM', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Ecuador', code: 'ECU', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'El Salvador', code: 'ESA', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Grenada', code: 'GRN', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Guatemala', code: 'GUA', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Guyana', code: 'GUY', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Haiti', code: 'HAI', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Honduras', code: 'HON', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Jamaica', code: 'JAM', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Mexico', code: 'MEX', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Montserrat', code: 'MAT', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Nicaragua', code: 'NCA', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Panama', code: 'PAN', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Paraguay', code: 'PAR', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Puerto Rico', code: 'PUR', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'St. Kitts', code: 'SKN', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'St. Lucia', code: 'LCA', flag: '', regionId: AMERICAS.id },
	{
		id: randomUUID(),
		name: 'St.Vincent and the Grenadines',
		code: 'VIN',
		flag: '',
		regionId: AMERICAS.id
	},
	{ id: randomUUID(), name: 'Suriname', code: 'SUR', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Trinidad and Tobago', code: 'TTO', flag: '', regionId: AMERICAS.id },
	{
		id: randomUUID(),
		name: 'Turks and Caicos Islands',
		code: 'TCI',
		flag: '',
		regionId: AMERICAS.id
	},
	{ id: randomUUID(), name: 'Uruguay', code: 'URU', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'USA', code: 'USA', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Venezuela', code: 'VEN', flag: '', regionId: AMERICAS.id },
	{ id: randomUUID(), name: 'Virgin Islands', code: 'ISV', flag: '', regionId: AMERICAS.id }
];

export const createAmericas = async (db: PrismaClient) => {
	console.log(`Creating AMERICAS region`);
	await db.regions.create({ data: AMERICAS });

	for (const country of COUNTRIES) {
		console.log(`Inserting ${country.name}`);

		country.flag = `https://countryflagsapi.com/svg/${country.name}`;
		await db.teams.create({ data: country });

		console.log(`${country.name} inserted successfully`);
	}

	console.log('AMERICAS region Created');
};

import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const OCEANIA = {
	id: randomUUID(),
	name: 'Oceania',
	code: 'OC'
};

const COUNTRIES = [
	{ id: randomUUID(), name: 'American Samoa', code: 'ASA', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Australia', code: 'AUS', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Cook Islands', code: 'COK', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Fiji', code: 'FIJ', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Guam', code: 'GUM', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Kiribati', code: 'KIR', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Marshall Islands', code: 'MHL', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Micronesia', code: 'FSM', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Nauru', code: 'NRU', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'New Caledonia', code: 'CAL', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'New Zealand', code: 'NZL', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Norfolk Island', code: 'NIS', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Mariana Islands', code: 'NMI', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Palau', code: 'PLW', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Papua New Guinea', code: 'PNG', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Samoa', code: 'SAM', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Solomon Islands', code: 'SOL', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Tahiti', code: 'TAH', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Timor-Leste', code: 'TLS', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Tonga', code: 'TGA', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Tuvalu', code: 'TUV', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Vanuatu', code: 'VAN', regionId: OCEANIA.id }
];

export const createOceania = async (db: PrismaClient) => {
	console.log(`Creating OCEANIA region`);
	await db.region.create({ data: OCEANIA });

	for (const country of COUNTRIES) {
		console.log(`Inserting ${country.name}`);
		await db.team.create({ data: country });
		console.log(`${country.name} inserted successfully`);
	}

	console.log('OCEANIA region Created');
};

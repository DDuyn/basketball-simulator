import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const OCEANIA = {
	id: randomUUID(),
	name: 'Oceania',
	code: 'OC'
};

const COUNTRIES = [
	{ id: randomUUID(), name: 'American Samoa', code: 'ASA', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Australia', code: 'AUS', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Cook Islands', code: 'COK', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Fiji', code: 'FIJ', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Guam', code: 'GUM', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Kiribati', code: 'KIR', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Marshall Islands', code: 'MHL', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Micronesia', code: 'FSM', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Nauru', code: 'NRU', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'New Caledonia', code: 'CAL', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'New Zealand', code: 'NZL', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Norfolk Island', code: 'NIS', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Mariana Islands', code: 'NMI', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Palau', code: 'PLW', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Papua New Guinea', code: 'PNG', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Samoa', code: 'SAM', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Solomon Islands', code: 'SOL', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Tahiti', code: 'TAH', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Timor-Leste', code: 'TLS', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Tonga', code: 'TGA', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Tuvalu', code: 'TUV', flag: '', regionId: OCEANIA.id },
	{ id: randomUUID(), name: 'Vanuatu', code: 'VAN', flag: '', regionId: OCEANIA.id }
];

export const createOceania = async (db: PrismaClient) => {
	console.log(`Creating OCEANIA region`);
	await db.regions.create({ data: OCEANIA });

	for (const country of COUNTRIES) {
		console.log(`Inserting ${country.name}`);
		country.flag = `https://countryflagsapi.com/svg/${country.name}`;
		await db.teams.create({ data: country });
		console.log(`${country.name} inserted successfully`);
	}

	console.log('OCEANIA region Created');
};

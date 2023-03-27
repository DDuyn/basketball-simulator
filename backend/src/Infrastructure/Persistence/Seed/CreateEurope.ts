import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const EUROPE = {
	id: randomUUID(),
	name: 'Europe',
	code: 'EU'
};

const COUNTRIES = [
	{ id: randomUUID(), name: 'Albania', code: 'ALB', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Andorra', code: 'AND', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Armenia', code: 'ARM', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Austria', code: 'AUT', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Azerbaijan', code: 'AZE', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Belarus', code: 'BLR', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Belgium', code: 'BEL', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Bosnia and Herzegovina', code: 'BIH', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Bulgaria', code: 'BUL', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Croatia', code: 'CRO', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Cyprus', code: 'CYP', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Czech Republic', code: 'CZE', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Denmark', code: 'DEN', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Estonia', code: 'EST', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Finland', code: 'FIN', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'France', code: 'FRA', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Georgia', code: 'GEO', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Germany', code: 'GER', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Gibraltar', code: 'GIB', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Great Britain', code: 'GBR', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Greece', code: 'GRE', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Hungary', code: 'HUN', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Iceland', code: 'ISL', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Ireland', code: 'IRL', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Israel', code: 'ISR', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Italy', code: 'ITA', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Kosovo', code: 'KOS', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Latvia', code: 'LAT', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Lithuania', code: 'LTU', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Luxembourg', code: 'LUX', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Malta', code: 'MLT', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Republic of Moldova', code: 'MDA', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Monaco', code: 'MON', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Montenegro', code: 'MNE', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Netherlands', code: 'NED', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'North Macedonia', code: 'MKD', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Norway', code: 'NOR', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Poland', code: 'POL', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Portugal', code: 'POR', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Romania', code: 'ROU', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Russia', code: 'RUS', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'San Marino', code: 'SMR', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Serbia', code: 'SRB', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Slovakia', code: 'SVK', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Slovenia', code: 'SLO', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Spain', code: 'ESP', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Sweden', code: 'SWE', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Switzerland', code: 'SUI', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Turkey', code: 'TUR', flag: '', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Ukraine', code: 'UKR', flag: '', regionId: EUROPE.id }
];

export const createEurope = async (db: PrismaClient) => {
	console.log(`Creating EUROPE region`);
	await db.regions.create({ data: EUROPE });

	for (const country of COUNTRIES) {
		console.log(`Inserting ${country.name}`);
		country.flag = `https://countryflagsapi.com/svg/${country.name}`;
		await db.teams.create({ data: country });
		console.log(`${country.name} inserted successfully`);
	}

	console.log('EUROPE region Created');
};

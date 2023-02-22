import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const EUROPE = {
	id: randomUUID(),
	name: 'Europe',
	code: 'EU'
};

const COUNTRIES = [
	{ id: randomUUID(), name: 'Albania', code: 'ALB', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Andorra', code: 'AND', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Armenia', code: 'ARM', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Austria', code: 'AUT', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Azerbaijan', code: 'AZE', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Belarus', code: 'BLR', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Belgium', code: 'BEL', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Bosnia and Herzegovina', code: 'BIH', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Bulgaria', code: 'BUL', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Croatia', code: 'CRO', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Cyprus', code: 'CYP', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Czech Republic', code: 'CZE', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Denmark', code: 'DEN', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Estonia', code: 'EST', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Finland', code: 'FIN', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'France', code: 'FRA', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Georgia', code: 'GEO', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Germany', code: 'GER', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Gibraltar', code: 'GIB', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Great Britain', code: 'GBR', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Greece', code: 'GRE', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Hungary', code: 'HUN', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Iceland', code: 'ISL', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Ireland', code: 'IRL', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Israel', code: 'ISR', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Italy', code: 'ITA', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Kosovo', code: 'KOS', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Latvia', code: 'LAT', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Lithuania', code: 'LTU', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Luxembourg', code: 'LUX', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Malta', code: 'MLT', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Republic of Moldova', code: 'MDA', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Monaco', code: 'MON', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Montenegro', code: 'MNE', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Netherlands', code: 'NED', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'North Macedonia', code: 'MKD', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Norway', code: 'NOR', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Poland', code: 'POL', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Portugal', code: 'POR', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Romania', code: 'ROU', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Russia', code: 'RUS', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'San Marino', code: 'SMR', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Serbia', code: 'SRB', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Slovakia', code: 'SVK', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Slovenia', code: 'SLO', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Spain', code: 'ESP', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Sweden', code: 'SWE', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Switzerland', code: 'SUI', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Turkey', code: 'TUR', regionId: EUROPE.id },
	{ id: randomUUID(), name: 'Ukraine', code: 'UKR', regionId: EUROPE.id }
];

export const createEurope = async (db: PrismaClient) => {
	console.log(`Creating EUROPE region`);
	await db.region.create({ data: EUROPE });

	for (const country of COUNTRIES) {
		console.log(`Inserting ${country.name}`);
		await db.team.create({ data: country });
		console.log(`${country.name} inserted successfully`);
	}

	console.log('EUROPE region Created');
};

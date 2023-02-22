import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
const ASIA = {
	id: randomUUID(),
	name: 'Asia',
	code: 'As'
};

const COUNTRIES = [
	{ id: randomUUID(), name: 'Afghanistan', code: 'AFG', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Bahrain', code: 'BRN', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Bangladesh', code: 'BAN', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Bhutan', code: 'BHU', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Brunei Darussalam', code: 'BRU', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Cambodia', code: 'CAM', regionId: ASIA.id },
	{ id: randomUUID(), name: 'China', code: 'CHN', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Chinese Taipei', code: 'TPE', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Hong Kong', code: 'HKG', regionId: ASIA.id },
	{ id: randomUUID(), name: 'India', code: 'IND', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Indonesia', code: 'INA', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Iran', code: 'IRI', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Iraq', code: 'IRQ', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Japan', code: 'JPN', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Jordan', code: 'JOR', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Kazakhstan', code: 'KAZ', regionId: ASIA.id },
	{ id: randomUUID(), name: 'South Korea', code: 'KOR', regionId: ASIA.id },
	{ id: randomUUID(), name: 'North Korea', code: 'PRK', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Kuwait', code: 'KUW', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Kyrgyzstan', code: 'KGZ', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Lao', code: 'LAO', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Lebanon', code: 'LBN', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Macau', code: 'MAC', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Malaysia', code: 'MAS', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Maldives', code: 'MDV', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Mongolia', code: 'MGL', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Myanmar', code: 'MYA', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Nepal', code: 'NEP', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Oman', code: 'OMA', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Pakistan', code: 'PAK', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Palestine', code: 'PLE', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Philippines', code: 'PHI', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Qatar', code: 'QAT', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Saudi Arabia', code: 'KSA', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Singapore', code: 'SGP', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Sri Lanka', code: 'SRI', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Syrian', code: 'SYR', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Tajikistan', code: 'TJK', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Thailand', code: 'THA', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Turkmenistan', code: 'TKM', regionId: ASIA.id },
	{ id: randomUUID(), name: 'United Arab Emirates', code: 'UAE', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Uzbekistan', code: 'UZB', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Vietnam', code: 'VIE', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Yemen', code: 'YEM', regionId: ASIA.id }
];

export const createAsia = async (db: PrismaClient) => {
	console.log(`Creating ASIA region`);
	await db.region.create({ data: ASIA });

	for (const country of COUNTRIES) {
		console.log(`Inserting ${country.name}`);
		await db.team.create({ data: country });
		console.log(`${country.name} inserted successfully`);
	}

	console.log('ASIA region Created');
};

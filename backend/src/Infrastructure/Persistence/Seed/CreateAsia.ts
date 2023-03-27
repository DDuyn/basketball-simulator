import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
const ASIA = {
	id: randomUUID(),
	name: 'Asia',
	code: 'As'
};

const COUNTRIES = [
	{ id: randomUUID(), name: 'Afghanistan', code: 'AFG', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Bahrain', code: 'BRN', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Bangladesh', code: 'BAN', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Bhutan', code: 'BHU', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Brunei Darussalam', code: 'BRU', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Cambodia', code: 'CAM', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'China', code: 'CHN', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Chinese Taipei', code: 'TPE', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Hong Kong', code: 'HKG', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'India', code: 'IND', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Indonesia', code: 'INA', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Iran', code: 'IRI', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Iraq', code: 'IRQ', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Japan', code: 'JPN', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Jordan', code: 'JOR', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Kazakhstan', code: 'KAZ', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'South Korea', code: 'KOR', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'North Korea', code: 'PRK', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Kuwait', code: 'KUW', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Kyrgyzstan', code: 'KGZ', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Lao', code: 'LAO', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Lebanon', code: 'LBN', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Macau', code: 'MAC', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Malaysia', code: 'MAS', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Maldives', code: 'MDV', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Mongolia', code: 'MGL', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Myanmar', code: 'MYA', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Nepal', code: 'NEP', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Oman', code: 'OMA', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Pakistan', code: 'PAK', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Palestine', code: 'PLE', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Philippines', code: 'PHI', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Qatar', code: 'QAT', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Saudi Arabia', code: 'KSA', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Singapore', code: 'SGP', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Sri Lanka', code: 'SRI', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Syrian', code: 'SYR', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Tajikistan', code: 'TJK', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Thailand', code: 'THA', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Turkmenistan', code: 'TKM', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'United Arab Emirates', code: 'UAE', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Uzbekistan', code: 'UZB', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Vietnam', code: 'VIE', flag: '', regionId: ASIA.id },
	{ id: randomUUID(), name: 'Yemen', code: 'YEM', flag: '', regionId: ASIA.id }
];

export const createAsia = async (db: PrismaClient) => {
	console.log(`Creating ASIA region`);
	await db.regions.create({ data: ASIA });

	for (const country of COUNTRIES) {
		console.log(`Inserting ${country.name}`);
		country.flag = `https://countryflagsapi.com/svg/${country.name}`;
		await db.teams.create({ data: country });
		console.log(`${country.name} inserted successfully`);
	}

	console.log('ASIA region Created');
};

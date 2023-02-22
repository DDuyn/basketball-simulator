import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
const AFRICA = {
	id: randomUUID(),
	name: 'Africa',
	code: 'AF'
};

const COUNTRIES = [
	{ id: randomUUID(), name: 'Algeria', code: 'ALG', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Angola', code: 'ANG', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Benin', code: 'BEN', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Botswana', code: 'BOT', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Burkina Faso', code: 'BUR', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Burundi', code: 'BDI', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Cameroon', code: 'CMR', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Cape Verde', code: 'CPV', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Central African Republic', code: 'CAF', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Chad', code: 'CHA', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Comoros', code: 'COM', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Congo', code: 'CGO', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Democratic Republic of the Congo', code: 'COD', regionId: AFRICA.id },
	{ id: randomUUID(), name: "Cote d'Ivoire", code: 'CIV', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Djibouti', code: 'DJI', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Egypt', code: 'EGY', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Equatorial Guinea', code: 'GEQ', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Eritrea', code: 'ERI', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Eswatini', code: 'SWZ', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Ethiopia', code: 'ETH', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Gabon', code: 'GAB', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Gambia', code: 'GAM', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Ghana', code: 'GHA', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Guinea', code: 'GUI', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Guinea-Bissau', code: 'GBS', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Kenya', code: 'KEN', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Lesotho', code: 'LES', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Liberia', code: 'LBR', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Libya', code: 'LBA', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Madagascar', code: 'MAD', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Malawi', code: 'MAW', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Mali', code: 'MLI', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Mauritania', code: 'MTN', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Mauritius', code: 'MRI', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Morocco', code: 'MAR', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Mozambique', code: 'MOZ', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Namibia', code: 'NAM', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Niger', code: 'NIG', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Nigeria', code: 'NGR', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Rwanda', code: 'RWA', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'São Tomé and Príncipe', code: 'STP', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Senegal', code: 'SEN', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Seychelles', code: 'SEY', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Sierra Leone', code: 'SLE', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Somalia', code: 'SOM', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'South Africa', code: 'RSA', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'South Sudan', code: 'SSD', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Sudan', code: 'SUD', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'United Republic of Tanzania', code: 'TAN', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Togo', code: 'TOG', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Tunisia', code: 'TUN', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Uganda', code: 'UGA', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Zambia', code: 'ZAM', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Zimbabwe', code: 'ZIM', regionId: AFRICA.id }
];

export const createAfrica = async (db: PrismaClient) => {
	console.log(`Creating AFRICA region`);
	await db.region.create({ data: AFRICA });

	for (const country of COUNTRIES) {
		console.log(`Inserting ${country.name}`);
		await db.team.create({ data: country });
		console.log(`${country.name} inserted successfully`);
	}

	console.log('AFRICA region Created');
};

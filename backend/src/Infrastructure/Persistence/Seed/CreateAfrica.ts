import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
const AFRICA = {
	id: randomUUID(),
	name: 'Africa',
	code: 'AF'
};

const COUNTRIES = [
	{ id: randomUUID(), name: 'Algeria', code: 'ALG', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Angola', code: 'ANG', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Benin', code: 'BEN', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Botswana', code: 'BOT', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Burkina Faso', code: 'BUR', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Burundi', code: 'BDI', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Cameroon', code: 'CMR', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Cape Verde', code: 'CPV', flag: '', regionId: AFRICA.id },
	{
		id: randomUUID(),
		name: 'Central African Republic',
		code: 'CAF',
		flag: '',
		regionId: AFRICA.id
	},
	{ id: randomUUID(), name: 'Chad', code: 'CHA', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Comoros', code: 'COM', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Congo', code: 'CGO', flag: '', regionId: AFRICA.id },
	{
		id: randomUUID(),
		name: 'Democratic Republic of the Congo',
		code: 'COD',
		flag: '',
		regionId: AFRICA.id
	},
	{ id: randomUUID(), name: "Cote d'Ivoire", code: 'CIV', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Djibouti', code: 'DJI', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Egypt', code: 'EGY', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Equatorial Guinea', code: 'GEQ', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Eritrea', code: 'ERI', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Eswatini', code: 'SWZ', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Ethiopia', code: 'ETH', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Gabon', code: 'GAB', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Gambia', code: 'GAM', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Ghana', code: 'GHA', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Guinea', code: 'GUI', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Guinea-Bissau', code: 'GBS', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Kenya', code: 'KEN', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Lesotho', code: 'LES', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Liberia', code: 'LBR', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Libya', code: 'LBA', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Madagascar', code: 'MAD', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Malawi', code: 'MAW', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Mali', code: 'MLI', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Mauritania', code: 'MTN', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Mauritius', code: 'MRI', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Morocco', code: 'MAR', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Mozambique', code: 'MOZ', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Namibia', code: 'NAM', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Niger', code: 'NIG', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Nigeria', code: 'NGR', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Rwanda', code: 'RWA', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'São Tomé and Príncipe', code: 'STP', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Senegal', code: 'SEN', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Seychelles', code: 'SEY', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Sierra Leone', code: 'SLE', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Somalia', code: 'SOM', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'South Africa', code: 'RSA', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'South Sudan', code: 'SSD', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Sudan', code: 'SUD', flag: '', regionId: AFRICA.id },
	{
		id: randomUUID(),
		name: 'United Republic of Tanzania',
		code: 'TAN',
		flag: '',
		regionId: AFRICA.id
	},
	{ id: randomUUID(), name: 'Togo', code: 'TOG', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Tunisia', code: 'TUN', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Uganda', code: 'UGA', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Zambia', code: 'ZAM', flag: '', regionId: AFRICA.id },
	{ id: randomUUID(), name: 'Zimbabwe', code: 'ZIM', flag: '', regionId: AFRICA.id }
];

export const createAfrica = async (db: PrismaClient) => {
	console.log(`Creating AFRICA region`);
	await db.region.create({ data: AFRICA });

	for (const country of COUNTRIES) {
		console.log(`Inserting ${country.name}`);

		country.flag = `https://countryflagsapi.com/svg/${country.name}`;
		await db.team.create({ data: country });

		console.log(`${country.name} inserted successfully`);
	}

	console.log('AFRICA region Created');
};

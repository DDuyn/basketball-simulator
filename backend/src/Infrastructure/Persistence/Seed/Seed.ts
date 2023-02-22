import { PrismaClient } from '@prisma/client';
import { createAfrica } from './CreateAfrica';
import { createAmericas } from './CreateAmericas';
import { createAsia } from './CreateAsia';
import { createEurope } from './CreateEurope';
import { createOceania } from './CreateOceania';

const prisma = new PrismaClient();

const main = async () => {
	await createEurope(prisma);
	await createAfrica(prisma);
	await createAmericas(prisma);
	await createAsia(prisma);
	await createOceania(prisma);
};

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

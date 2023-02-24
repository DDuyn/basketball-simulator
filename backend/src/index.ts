import 'reflect-metadata';

import Container from 'typedi';
import { registerDbContext, registerUseCases } from './Infrastructure/DependencyInjection';
import { Server } from './Infrastructure/Server/Server';

const bootstrap = async () => {
	await registerDbContext();
	await registerUseCases();
	const app = await Container.get(Server);
	await app.init();
};

bootstrap();

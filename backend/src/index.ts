import Container from 'typedi';
import { DatabaseContext } from './Infrastructure/Persistence/Context/DatabaseContext';
import { Server } from './Infrastructure/Server/Server';

const bootstrap = async () => {
	await Container.set(DatabaseContext, DatabaseContext.getInstance());
	const app = await Container.get(Server);
	await app.init();
};

bootstrap();

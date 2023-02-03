import Container from 'typedi';
import { DatabaseContext } from './Infrastructure/Persistence/Context/DatabaseContext';
import { App } from './Infrastructure/Server/App';

const bootstrap = async () => {
	await Container.set(DatabaseContext, DatabaseContext.getInstance());
	const app = App.init();

	app.listen(3000, () => {
		console.log(`App listening on the port ${3000}`);
	});
};

bootstrap();

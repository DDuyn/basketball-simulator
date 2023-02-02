import { App } from './app';
import { Database } from './database';

const bootstrap = async () => {
	await Database.connect();
	const app = App.init();

	app.listen(3000, () => {
		console.log(`App listening on the port ${3000}`);
	});
};

bootstrap();

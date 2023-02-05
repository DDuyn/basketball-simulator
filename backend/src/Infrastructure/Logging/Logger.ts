import winston from 'winston';

export class Logger {
	private static logger: winston.Logger;
	//TODO: Improve logger
	static async configure() {
		this.logger = winston.createLogger({
			format: winston.format.json(),
			transports: [
				new winston.transports.Console(),
				new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
				new winston.transports.File({ filename: 'logs/combined.log' })
			]
		});
	}

	static info(message: string) {
		this.logger.info(message);
	}

	static error(message: string) {
		this.logger.error(message);
	}

	static debug(message: string) {
		this.logger.debug(message);
	}
}

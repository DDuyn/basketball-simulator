import { Exception } from './Exception';

export class InternalException extends Exception {
	constructor(message: string = 'Internal error') {
		super(message, 500, 'InternalException');
	}
}

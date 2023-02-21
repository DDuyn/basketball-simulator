import { Exception } from './Exception';
export class InvalidArgumentException extends Exception {
	constructor(message: string = 'Invalid Argument') {
		super(message, 400, 'InvalidArgumentException');
	}
}

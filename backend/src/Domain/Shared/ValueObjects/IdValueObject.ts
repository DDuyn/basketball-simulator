import { InvalidArgumentException } from '../Exceptions/InvalidArgumentException';
import { ValueObject } from './ValueObject';

export class IdValueObject extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.isUUID(value);
	}

	isUUID(uuid: string): void {
		const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
		if (!uuidRegex.test(uuid)) throw new InvalidArgumentException('Invalid UUID format');
	}
}

import { InvalidArgumentException } from '../Exceptions/InvalidArgumentException';
import { ValueObject } from './ValueObject';

export class CodeValueObject extends ValueObject<string> {
	constructor(value: string) {
		super(value.toUpperCase());
		this.ensureMaxLength(value);
	}

	private ensureMaxLength(value: string): void {
		//TODO: Convert in Constant
		if (value.length > 3) {
			throw new InvalidArgumentException('The length of the value must not exceed 3 characters');
		}
	}
}

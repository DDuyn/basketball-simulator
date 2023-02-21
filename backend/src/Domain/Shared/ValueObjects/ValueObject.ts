import { InvalidArgumentException } from '../Exceptions/InvalidArgumentException';

type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
	readonly value: T;

	constructor(value: T) {
		this.ensureValueIsDefined(value);
		this.value = value;
	}

	private ensureValueIsDefined(value: T): void {
		if (value === null || value === undefined)
			throw new InvalidArgumentException(`Value must be defined`);
	}

	equals(other: ValueObject<T>): boolean {
		return other.constructor.name === this.constructor.name && other.value === this.value;
	}

	toString(): string {
		return this.value.toString();
	}
}

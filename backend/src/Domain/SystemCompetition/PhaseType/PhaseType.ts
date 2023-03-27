import { PhaseTypeId } from './PhaseTypeId';
import { PhaseTypeName } from './PhaseTypeName';
export class PhaseType {
	id: PhaseTypeId;
	name: PhaseTypeName;

	constructor(id: PhaseTypeId, name: PhaseTypeName) {
		this.id = id;
		this.name = name;
	}

	static create({ id, name }: { id: string; name: string }) {
		return new PhaseType(new PhaseTypeId(id), new PhaseTypeName(name));
	}
}

import { RegionCode } from './RegionCode';
import { RegionId } from './RegionId';
import { RegionName } from './RegionName';

export class Region {
	id: RegionId;
	name: RegionName;
	code: RegionCode;

	constructor(id: RegionId, name: RegionName, code: RegionCode) {
		this.id = id;
		this.name = name;
		this.code = code;
	}
}

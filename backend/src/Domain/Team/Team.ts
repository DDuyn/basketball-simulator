import { Region } from '../Region/Region';
import { TeamCode } from './TeamCode';
import { TeamId } from './TeamId';
import { TeamName } from './TeamName';

export class Team {
	id: TeamId;
	name: TeamName;
	code: TeamCode;
	region: Region;

	constructor(id: TeamId, name: TeamName, code: TeamCode, region: Region) {
		this.id = id;
		this.name = name;
		this.code = code;
		this.region = region;
	}
}

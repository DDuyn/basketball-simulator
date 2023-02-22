import { Region } from '../Region/Region';
import { TeamCode } from './TeamCode';
import { TeamFlag } from './TeamFlag';
import { TeamId } from './TeamId';
import { TeamName } from './TeamName';

export class Team {
	id: TeamId;
	name: TeamName;
	code: TeamCode;
	flag: TeamFlag;
	region: Region;

	constructor(id: TeamId, name: TeamName, code: TeamCode, flag: TeamFlag, region: Region) {
		this.id = id;
		this.name = name;
		this.code = code;
		this.flag = flag;
		this.region = region;
	}
}

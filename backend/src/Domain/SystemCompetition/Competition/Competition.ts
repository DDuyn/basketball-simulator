import { Region } from '../../Region/Region';
import { Phase } from '../Phase/Phase';
import { CompetitionId } from './CompetitionId';
import { CompetitionName } from './CompetitionName';

export class Competition {
	id: CompetitionId;
	name: CompetitionName;
	region: Region;
	phases: Phase[];

	constructor(id: CompetitionId, name: CompetitionName, region: Region, phases: Phase[]) {
		this.id = id;
		this.name = name;
		this.region = region;
		this.phases = phases;
	}
}

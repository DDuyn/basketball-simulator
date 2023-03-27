import { RuleGames } from './RuleGames';
import { RuleGroups } from './RuleGroups';
import { RuleId } from './RuleId';
import { RuleName } from './RuleName';
import { RuleTeams } from './RuleTeams';
import { RuleTeamsByGroup } from './RuleTeamsByGroup';
import { RuleTeamsRankedByGroup } from './RuleTeamsRankedByGroup';

export class Rule {
	id: RuleId;
	name: RuleName;
	groups: RuleGroups;
	teams: RuleTeams;
	games: RuleGames;
	teamsByGroup: RuleTeamsByGroup;
	teamsRankedByGroup: RuleTeamsRankedByGroup;

	constructor(
		id: RuleId,
		name: RuleName,
		groups: RuleGroups,
		teams: RuleTeams,
		games: RuleGames,
		teamsByGroup: RuleTeamsByGroup,
		teamsRankedByGroup: RuleTeamsRankedByGroup
	) {
		this.id = id;
		this.name = name;
		this.groups = groups;
		this.teams = teams;
		this.games = games;
		this.teamsByGroup = teamsByGroup;
		this.teamsRankedByGroup = teamsRankedByGroup;
	}

	static create({
		id,
		name,
		groups,
		teams,
		games,
		teamsByGroup,
		teamsRankedByGroup
	}: {
		id: string;
		name: string;
		groups: number;
		teams: number;
		games: number;
		teamsByGroup: number;
		teamsRankedByGroup: number;
	}) {
		return new Rule(
			new RuleId(id),
			new RuleName(name),
			new RuleGroups(groups),
			new RuleTeams(teams),
			new RuleGames(games),
			new RuleTeamsByGroup(teamsByGroup),
			new RuleTeamsRankedByGroup(teamsRankedByGroup)
		);
	}
}

import { PhaseType } from '../PhaseType/PhaseType';
import { Rule } from '../Rule/Rule';
import { PhaseId } from './PhaseId';
import { PhaseRound } from './PhaseRound';

export class Phase {
	id: PhaseId;
	round: PhaseRound;
	phaseType: PhaseType;
	rule: Rule;

	constructor(id: PhaseId, round: PhaseRound, phaseType: PhaseType, rule: Rule) {
		this.id = id;
		this.round = round;
		this.phaseType = phaseType;
		this.rule = rule;
	}

	static create({
		id,
		round,
		phaseType,
		rule
	}: {
		id: string;
		round: number;
		phaseType: PhaseType;
		rule: Rule;
	}) {
		return new Phase(new PhaseId(id), new PhaseRound(round), phaseType, rule);
	}
}

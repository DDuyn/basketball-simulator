import { PrismaClient, Rules } from '@prisma/client';
import { randomUUID } from 'crypto';

const generateRules = async (db: PrismaClient) => {
	const RULES: Rules[] = [
		{
			id: randomUUID(),
			name: '8 Groups - 6 Teams',
			groups: 8,
			teams: 48,
			games: 80,
			teamsByGroup: 6,
			teamsRankedByGroup: 3
		},
		{
			id: randomUUID(),
			name: '4 Groups - 6 Teams',
			groups: 4,
			teams: 24,
			games: 40,
			teamsByGroup: 6,
			teamsRankedByGroup: 2
		},
		{
			id: randomUUID(),
			name: '4 Groups - 4 Teams (Ranked 3)',
			groups: 4,
			teams: 16,
			games: 24,
			teamsByGroup: 4,
			teamsRankedByGroup: 3
		},
		{
			id: randomUUID(),
			name: '3 Groups - 4 Teams',
			groups: 3,
			teams: 12,
			games: 18,
			teamsByGroup: 4,
			teamsRankedByGroup: 2
		},
		{
			id: randomUUID(),
			name: '6 Groups - 6 Teams',
			groups: 6,
			teams: 36,
			games: 60,
			teamsByGroup: 6,
			teamsRankedByGroup: 4
		},
		{
			id: randomUUID(),
			name: '4 Groups - 4 Teams (Ranked 2)',
			groups: 4,
			teams: 16,
			games: 24,
			teamsByGroup: 4,
			teamsRankedByGroup: 2
		},
		{
			id: randomUUID(),
			name: '2 Groups - 12 Teams',
			groups: 2,
			teams: 24,
			games: 22,
			teamsByGroup: 12,
			teamsRankedByGroup: 5
		}
	];
};

const generatePhaseTypes = async (db: PrismaClient) => {
	console.log(`Generating phase types`);
	const PHASE_TYPES = [
		{
			id: randomUUID(),
			name: 'Groups'
		},
		{
			id: randomUUID(),
			name: 'Top 32'
		},
		{
			id: randomUUID(),
			name: 'Top 16'
		},
		{
			id: randomUUID(),
			name: 'Top 8'
		},
		{
			id: randomUUID(),
			name: 'Top 4'
		},
		{
			id: randomUUID(),
			name: 'Final'
		}
	];

	for (const phaseType of PHASE_TYPES) {
		console.log(`Saving ${phaseType.name}`);
		await db.phaseTypes.create({ data: phaseType });

		console.log(`Save successfully`);
	}
};

const generatePhases = async (db: PrismaClient) => {};

export const generatePhasesTypeAndRules = async (db: PrismaClient) => {
	await generatePhaseTypes(db);
};

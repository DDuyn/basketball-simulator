/*
  Warnings:

  - You are about to drop the column `games` on the `Competition` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Competition` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "CompetitionPhases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "round" INTEGER NOT NULL,
    "competitionId" TEXT NOT NULL,
    "ruleId" TEXT NOT NULL,
    "phaseTypeId" TEXT NOT NULL,
    CONSTRAINT "CompetitionPhases_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rules" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "CompetitionPhases_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "CompetitionPhases_phaseTypeId_fkey" FOREIGN KEY ("phaseTypeId") REFERENCES "PhaseType" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "PhaseType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Rules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "numberGroups" INTEGER NOT NULL,
    "teamsForGroup" INTEGER NOT NULL,
    "totalTeams" INTEGER NOT NULL,
    "totalGames" INTEGER NOT NULL,
    "teamsRankedByGroup" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Competition" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    CONSTRAINT "Competition_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Competition" ("code", "id", "name", "regionId") SELECT "code", "id", "name", "regionId" FROM "Competition";
DROP TABLE "Competition";
ALTER TABLE "new_Competition" RENAME TO "Competition";
CREATE UNIQUE INDEX "Competition_code_key" ON "Competition"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "CompetitionPhases_round_competitionId_key" ON "CompetitionPhases"("round", "competitionId");

/*
  Warnings:

  - You are about to drop the `Competition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PhaseType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Competition_code_key";

-- DropIndex
DROP INDEX "Region_code_key";

-- DropIndex
DROP INDEX "Team_code_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Competition";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PhaseType";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Region";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Team";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Regions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Teams" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    CONSTRAINT "Teams_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Regions" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Competitions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    CONSTRAINT "Competitions_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Regions" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "PhaseTypes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CompetitionPhases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "round" INTEGER NOT NULL,
    "competitionId" TEXT NOT NULL,
    "ruleId" TEXT NOT NULL,
    "phaseTypeId" TEXT NOT NULL,
    CONSTRAINT "CompetitionPhases_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rules" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "CompetitionPhases_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competitions" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "CompetitionPhases_phaseTypeId_fkey" FOREIGN KEY ("phaseTypeId") REFERENCES "PhaseTypes" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_CompetitionPhases" ("competitionId", "id", "phaseTypeId", "round", "ruleId") SELECT "competitionId", "id", "phaseTypeId", "round", "ruleId" FROM "CompetitionPhases";
DROP TABLE "CompetitionPhases";
ALTER TABLE "new_CompetitionPhases" RENAME TO "CompetitionPhases";
CREATE UNIQUE INDEX "CompetitionPhases_round_competitionId_key" ON "CompetitionPhases"("round", "competitionId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Regions_code_key" ON "Regions"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Teams_code_key" ON "Teams"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Competitions_code_key" ON "Competitions"("code");

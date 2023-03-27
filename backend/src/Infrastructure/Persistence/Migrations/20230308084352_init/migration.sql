/*
  Warnings:

  - You are about to drop the `CompetitionPhases` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CompetitionPhases";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Phases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "round" INTEGER NOT NULL,
    "competitionId" TEXT NOT NULL,
    "ruleId" TEXT NOT NULL,
    "phaseTypeId" TEXT NOT NULL,
    CONSTRAINT "Phases_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rules" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "Phases_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competitions" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "Phases_phaseTypeId_fkey" FOREIGN KEY ("phaseTypeId") REFERENCES "PhaseTypes" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateIndex
CREATE UNIQUE INDEX "Phases_round_competitionId_key" ON "Phases"("round", "competitionId");

/*
  Warnings:

  - You are about to drop the column `numberGroups` on the `Rules` table. All the data in the column will be lost.
  - Added the required column `groups` to the `Rules` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "groups" INTEGER NOT NULL,
    "teamsForGroup" INTEGER NOT NULL,
    "totalTeams" INTEGER NOT NULL,
    "totalGames" INTEGER NOT NULL,
    "teamsRankedByGroup" INTEGER NOT NULL
);
INSERT INTO "new_Rules" ("id", "name", "teamsForGroup", "teamsRankedByGroup", "totalGames", "totalTeams") SELECT "id", "name", "teamsForGroup", "teamsRankedByGroup", "totalGames", "totalTeams" FROM "Rules";
DROP TABLE "Rules";
ALTER TABLE "new_Rules" RENAME TO "Rules";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

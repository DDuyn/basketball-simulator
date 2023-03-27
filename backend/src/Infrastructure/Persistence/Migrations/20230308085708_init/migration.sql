/*
  Warnings:

  - You are about to drop the column `totalGames` on the `Rules` table. All the data in the column will be lost.
  - You are about to drop the column `totalTeams` on the `Rules` table. All the data in the column will be lost.
  - Added the required column `games` to the `Rules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teams` to the `Rules` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "groups" INTEGER NOT NULL,
    "teamsForGroup" INTEGER NOT NULL,
    "teams" INTEGER NOT NULL,
    "games" INTEGER NOT NULL,
    "teamsRankedByGroup" INTEGER NOT NULL
);
INSERT INTO "new_Rules" ("groups", "id", "name", "teamsForGroup", "teamsRankedByGroup") SELECT "groups", "id", "name", "teamsForGroup", "teamsRankedByGroup" FROM "Rules";
DROP TABLE "Rules";
ALTER TABLE "new_Rules" RENAME TO "Rules";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

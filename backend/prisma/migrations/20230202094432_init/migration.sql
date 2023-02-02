/*
  Warnings:

  - You are about to drop the column `region_id` on the `Competition` table. All the data in the column will be lost.
  - You are about to drop the column `region_id` on the `Team` table. All the data in the column will be lost.
  - Added the required column `regionId` to the `Competition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regionId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Competition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "games" INTEGER NOT NULL,
    "regionId" INTEGER NOT NULL,
    CONSTRAINT "Competition_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Competition" ("code", "games", "id", "name", "quantity") SELECT "code", "games", "id", "name", "quantity" FROM "Competition";
DROP TABLE "Competition";
ALTER TABLE "new_Competition" RENAME TO "Competition";
CREATE TABLE "new_Team" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "regionId" INTEGER NOT NULL,
    CONSTRAINT "Team_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Team" ("code", "id", "name") SELECT "code", "id", "name" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - The primary key for the `Region` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Competition` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Region" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL
);
INSERT INTO "new_Region" ("code", "id", "name") SELECT "code", "id", "name" FROM "Region";
DROP TABLE "Region";
ALTER TABLE "new_Region" RENAME TO "Region";
CREATE TABLE "new_Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    CONSTRAINT "Team_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Team" ("code", "id", "name", "regionId") SELECT "code", "id", "name", "regionId" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
CREATE TABLE "new_Competition" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "games" INTEGER NOT NULL,
    "regionId" TEXT NOT NULL,
    CONSTRAINT "Competition_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Competition" ("code", "games", "id", "name", "quantity", "regionId") SELECT "code", "games", "id", "name", "quantity", "regionId" FROM "Competition";
DROP TABLE "Competition";
ALTER TABLE "new_Competition" RENAME TO "Competition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

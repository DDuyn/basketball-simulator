/*
  Warnings:

  - You are about to drop the column `code` on the `Competitions` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Competitions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    CONSTRAINT "Competitions_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Regions" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Competitions" ("id", "name", "regionId") SELECT "id", "name", "regionId" FROM "Competitions";
DROP TABLE "Competitions";
ALTER TABLE "new_Competitions" RENAME TO "Competitions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

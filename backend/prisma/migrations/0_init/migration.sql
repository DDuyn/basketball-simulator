-- CreateTable
CREATE TABLE "Region" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Team" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "region_id" INTEGER NOT NULL,
    CONSTRAINT "Team_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "Region" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Competition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "games" INTEGER NOT NULL,
    "region_id" INTEGER NOT NULL,
    CONSTRAINT "Competition_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "Region" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);


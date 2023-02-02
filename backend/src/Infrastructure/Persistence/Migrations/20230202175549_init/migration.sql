-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    CONSTRAINT "Team_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Competition" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "games" INTEGER NOT NULL,
    "regionId" TEXT NOT NULL,
    CONSTRAINT "Competition_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

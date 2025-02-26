/*
  Warnings:

  - You are about to drop the column `graduationYear` on the `Students` table. All the data in the column will be lost.
  - Added the required column `githubUrl` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectLink1` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectLink2` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Students" DROP COLUMN "graduationYear",
ADD COLUMN     "githubUrl" TEXT NOT NULL,
ADD COLUMN     "projectLink1" TEXT NOT NULL,
ADD COLUMN     "projectLink2" TEXT NOT NULL;

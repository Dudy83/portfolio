/*
  Warnings:

  - You are about to drop the column `image` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `cover` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `TechnoItem` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `TechnoItem` table. All the data in the column will be lost.
  - Added the required column `backgroundClassName` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ctaLink` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ctaText` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `place` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `href` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `TechnoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `TechnoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `TechnoItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "image",
DROP COLUMN "name",
ADD COLUMN     "backgroundClassName" TEXT NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "ctaLink" TEXT NOT NULL,
ADD COLUMN     "ctaText" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "place" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "cover",
DROP COLUMN "image",
DROP COLUMN "name",
DROP COLUMN "url",
ADD COLUMN     "coverUrl" TEXT,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "href" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TechnoItem" DROP COLUMN "image",
DROP COLUMN "name",
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

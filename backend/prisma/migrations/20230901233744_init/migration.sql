/*
  Warnings:

  - You are about to drop the column `history_id` on the `Observation` table. All the data in the column will be lost.
  - The primary key for the `center_employees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `center_employees` table. All the data in the column will be lost.
  - The primary key for the `collaborators` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `collaborators` table. All the data in the column will be lost.
  - You are about to drop the column `center_employee_id` on the `collect_centers` table. All the data in the column will be lost.
  - You are about to drop the `histories` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[center_employee_email]` on the table `collect_centers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `log_actions_collaborator_id` to the `Observation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Observation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `center_employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `collaborators` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `collaborators` table without a default value. This is not possible if the table is not empty.
  - Added the required column `center_employee_email` to the `collect_centers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `collect_centers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `locations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Observation" DROP CONSTRAINT "Observation_history_id_fkey";

-- DropForeignKey
ALTER TABLE "collect_centers" DROP CONSTRAINT "collect_centers_center_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "histories" DROP CONSTRAINT "histories_collaborator_id_fkey";

-- DropForeignKey
ALTER TABLE "histories" DROP CONSTRAINT "histories_collect_center_id_fkey";

-- DropForeignKey
ALTER TABLE "histories" DROP CONSTRAINT "histories_receiver_id_fkey";

-- DropIndex
DROP INDEX "center_employees_email_key";

-- DropIndex
DROP INDEX "collaborators_email_key";

-- DropIndex
DROP INDEX "collect_centers_center_employee_id_key";

-- AlterTable
ALTER TABLE "Observation" DROP COLUMN "history_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "log_actions_collaborator_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "center_employees" DROP CONSTRAINT "center_employees_pkey",
DROP COLUMN "id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "center_employees_pkey" PRIMARY KEY ("email");

-- AlterTable
ALTER TABLE "collaborators" DROP CONSTRAINT "collaborators_pkey",
DROP COLUMN "id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "collaborators_pkey" PRIMARY KEY ("email");

-- AlterTable
ALTER TABLE "collect_centers" DROP COLUMN "center_employee_id",
ADD COLUMN     "center_employee_email" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "locations" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "histories";

-- CreateTable
CREATE TABLE "log_actions_collaborator" (
    "id" SERIAL NOT NULL,
    "submit_date" TIMESTAMP(3) NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "attention_quality" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "collaborator_email" TEXT NOT NULL,
    "collect_center_id" INTEGER NOT NULL,
    "receiver_id" TEXT NOT NULL,

    CONSTRAINT "log_actions_collaborator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "collect_centers_center_employee_email_key" ON "collect_centers"("center_employee_email");

-- AddForeignKey
ALTER TABLE "collect_centers" ADD CONSTRAINT "collect_centers_center_employee_email_fkey" FOREIGN KEY ("center_employee_email") REFERENCES "center_employees"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_actions_collaborator" ADD CONSTRAINT "log_actions_collaborator_collaborator_email_fkey" FOREIGN KEY ("collaborator_email") REFERENCES "collaborators"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_actions_collaborator" ADD CONSTRAINT "log_actions_collaborator_collect_center_id_fkey" FOREIGN KEY ("collect_center_id") REFERENCES "collect_centers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_actions_collaborator" ADD CONSTRAINT "log_actions_collaborator_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "center_employees"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_log_actions_collaborator_id_fkey" FOREIGN KEY ("log_actions_collaborator_id") REFERENCES "log_actions_collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

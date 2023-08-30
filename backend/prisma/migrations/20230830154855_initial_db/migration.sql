/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "collaborators" (
    "id" SERIAL NOT NULL,
    "ci" VARCHAR(10) NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" VARCHAR(10) NOT NULL,
    "province" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "collaborators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "province" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "center_employees" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" VARCHAR(10) NOT NULL,

    CONSTRAINT "center_employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collect_centers" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "location_id" INTEGER NOT NULL,
    "center_employee_id" INTEGER NOT NULL,

    CONSTRAINT "collect_centers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "histories" (
    "id" SERIAL NOT NULL,
    "submit_date" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "attention_quality" INTEGER NOT NULL,
    "collaborator_id" INTEGER NOT NULL,
    "collect_center_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,

    CONSTRAINT "histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Observation" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "history_id" INTEGER NOT NULL,

    CONSTRAINT "Observation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "collaborators_ci_key" ON "collaborators"("ci");

-- CreateIndex
CREATE UNIQUE INDEX "collaborators_email_key" ON "collaborators"("email");

-- CreateIndex
CREATE UNIQUE INDEX "center_employees_email_key" ON "center_employees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "collect_centers_center_employee_id_key" ON "collect_centers"("center_employee_id");

-- AddForeignKey
ALTER TABLE "collect_centers" ADD CONSTRAINT "collect_centers_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collect_centers" ADD CONSTRAINT "collect_centers_center_employee_id_fkey" FOREIGN KEY ("center_employee_id") REFERENCES "center_employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "histories" ADD CONSTRAINT "histories_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "collaborators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "histories" ADD CONSTRAINT "histories_collect_center_id_fkey" FOREIGN KEY ("collect_center_id") REFERENCES "collect_centers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "histories" ADD CONSTRAINT "histories_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "center_employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_history_id_fkey" FOREIGN KEY ("history_id") REFERENCES "histories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

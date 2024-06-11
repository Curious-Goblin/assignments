-- CreateTable
CREATE TABLE "Survey" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "survey_id" INTEGER NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Options" (
    "id" SERIAL NOT NULL,
    "option1" TEXT NOT NULL,
    "option2" TEXT NOT NULL,
    "question_id" INTEGER NOT NULL,

    CONSTRAINT "Options_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

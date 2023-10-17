-- CreateTable
CREATE TABLE "Wish" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "wisher" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Wish_pkey" PRIMARY KEY ("id")
);

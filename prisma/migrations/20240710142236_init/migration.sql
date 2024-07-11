-- CreateTable
CREATE TABLE "Todos" (
    "id" TEXT NOT NULL,
    "todoText" TEXT NOT NULL,
    "isCheck" BOOLEAN NOT NULL,
    "createdTodo" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);

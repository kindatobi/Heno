import { Prisma } from "@/app/generated/prisma/client";
import { createProductSchema, signUpUserSchema } from "@/lib/validators";
import z from "zod";

export type createProduct = z.infer<typeof createProductSchema> & {
  id: string;
  createdAt: Date;
};

export type signUpUser = z.infer<typeof signUpUserSchema> & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = Prisma.ProductGetPayload<{
  include: { sizeStock: true };
}>;

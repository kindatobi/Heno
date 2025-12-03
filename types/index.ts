import { Prisma } from "@/app/generated/prisma/client";
import { createProductSchema, signUpUserSchema } from "@/lib/validators";
import z from "zod";

export type CreateProduct = z.infer<typeof createProductSchema> & {
  id: string;
  createdAt: Date;
};

export type SignUpUser = z.infer<typeof signUpUserSchema>;

export type Product = Prisma.ProductGetPayload<{
  include: { sizeStock: true };
}>;

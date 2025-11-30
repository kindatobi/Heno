import { createProductSchema, signUpUserSchema } from "@/lib/validators";
import z from "zod";

export type Product = z.infer<typeof createProductSchema> & {
  id: string;
  createdAt: Date;
};

export type User = z.infer<typeof signUpUserSchema> & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

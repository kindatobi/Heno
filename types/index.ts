import { createProductSchema } from "@/lib/validators";
import z from "zod";

export type Product = z.infer<typeof createProductSchema> & {
  id: string;
  createdAt: Date;
};

import z from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  category: z.enum([
    "TOPS",
    "BOTTOMS",
    "DENIMS",
    "LEATHER",
    "OUTERWEAR",
    "ACCESSORIES",
  ]),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(32, "Description must be less than 32 words"),
  color: z.string().min(1, "Color is required"),
  detail: z.string().min(1, "Detail is required"),
  sizingInfo: z
    .array(
      z.object({
        size: z.enum(["XS", "S", "M", "L", "XL", "XXL", "XXXL", "ONE_SIZE"]),
        bodyLength: z.string(),
        chest: z.string(),
      })
    )
    .nullable(),
  sizeStock: z.array(
    z.object({
      size: z.enum(["XS", "S", "M", "L", "XL", "XXL", "XXXL", "ONE_SIZE"]),
      stock: z.coerce.number().int().min(0),
    })
  ),
  price: z.coerce.number().min(1, "Price is required"),
  onSale: z.boolean(),
  discountPercent: z.coerce.number().int().min(0).max(100).nullable(),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
});

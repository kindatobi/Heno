import z from "zod";

export const signUpUserSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const signInUserSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const showcaseImagesSchema = z.object({
  spin360: z
    .object({
      left: z.array(z.string()).length(8, "Must be exactly 8 images"),
      right: z.array(z.string()).length(8, "Must be exactly 8 images"),
    })
    .nullable(),
  regular: z.array(z.string()).min(1, "At least one regular image required"),
});

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
  shopImage: z.string().min(1, "Shop Image is required"),
  showcaseImages: showcaseImagesSchema,
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

export const userUpdateProfileSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().min(3, "Email must be at least 3 characters"),
  image: z.string().nullable(),
});

export const addItemToCartSchema = z.object({
  productId: z.string(),
  size: z.enum(["XS", "S", "M", "L", "XL", "XXL", "XXXL", "ONE_SIZE"]),
});

const insertCartItemSchema = z.object({
  productId: z.string(),
  name: z.string(),
  slug: z.string(),
  size: z.string(),
  price: z.number().positive(),
  qty: z.number().int().positive(),
  image: z.string(),
});

export const insertCartSchema = z.object({
  items: z.array(insertCartItemSchema),
  itemsPrice: z.number().positive(),
  shippingPrice: z.number().positive(),
  taxPrice: z.number().positive(),
  totalPrice: z.number().positive(),
});

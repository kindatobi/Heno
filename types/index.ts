// import { Prisma } from "@/app/generated/prisma/client";
// import { createProductSchema, signUpUserSchema } from "@/lib/validators";
// import z from "zod";

// export type CreateProduct = z.infer<typeof createProductSchema> & {
//   id: string;
//   createdAt: Date;
// };

// export type SignUpUser = z.infer<typeof signUpUserSchema>;

// export type Product = Prisma.ProductGetPayload<{
//   include: { sizeStock: true };
// }>;

// import { Prisma } from "@/app/generated/prisma/client";
// import { createProductSchema, signUpUserSchema } from "@/lib/validators";
// import z from "zod";

// export type CreateProduct = z.infer<typeof createProductSchema> & {
//   id: string;
//   createdAt: Date;
// };

// export type SignUpUser = z.infer<typeof signUpUserSchema>;

// type ShowcaseImages = {
//   spin360: {
//     left: string[];
//     right: string[];
//   } | null;
//   regular: string[];
// };

// type SizingInfo = Array<{
//   size: string;
//   bodyLength: string;
//   chest: string;
// }>;

// export type Product = Omit
//   Prisma.ProductGetPayload<{
//     include: { sizeStock: true };
//   }>,
//   'showcaseImages' | 'sizingInfo'
// > & {
//   showcaseImages: ShowcaseImages;
//   sizingInfo: SizingInfo | null;
// };

import { Product as PrismaProduct } from "@/app/generated/prisma/client";
import { createProductSchema, signUpUserSchema } from "@/lib/validators";
import z from "zod";

export type CreateProduct = z.infer<typeof createProductSchema> & {
  id: string;
  createdAt: Date;
};

export type SignUpUser = z.infer<typeof signUpUserSchema>;

type ShowcaseImages = {
  spin360: {
    left: string[];
    right: string[];
  } | null;
  regular: string[];
};

type SizingInfo = Array<{
  size: string;
  bodyLength: string;
  chest: string;
}>;

export type Product = Omit<PrismaProduct, "showcaseImages" | "sizingInfo"> & {
  showcaseImages: ShowcaseImages;
  sizingInfo: SizingInfo | null;
};

export type Cart = {
  userId: string;
  sessionCartId: string;
  items: CartItem[];
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
};

export type CartItem = {
  productId: string;
  name: string;
  slug: string;
  price: number;
  qty: number;
  image: string;
};

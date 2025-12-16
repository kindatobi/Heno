import {
  Product as PrismaProduct,
  SizeStock,
} from "@/app/generated/prisma/client";
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
  sizeStock?: SizeStock[];
};

export type ProductSizeStock = {
  size: string;
  stock: number;
};

export type Cart = {
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
  size: string;
  price: number;
  qty: number;
  image: string;
};

export type LowStockItem = {
  id: string;
  productId: string;
  size: string;
  stock: number;
  product: {
    id: string;
    name: string;
    category: string;
    shopImage: string;
  };
};

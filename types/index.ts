import { Product, SizeStock } from "@/generated/prisma/client";
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

export type ProductItem = Omit<Product, "showcaseImages" | "sizingInfo"> & {
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

// export type OrderItem = {
//   orderId: string;
//   productId: string;
//   qty: number;
//   price: number;
//   name: string;
//   slug: string;
//   size: string;
//   image: string;
//   order: Order;
//   product: Product;
// };

// export type Order = {
//   id: string;
//   userId: string | null;
//   customerName: string;
//   customerEmail: string;
//   shippingAddress: Record<string, any> | null;
//   paymentMethod: string;
//   paymentResult: Record<string, any> | null;
//   itemsPrice: number;
//   shippingPrice: number;
//   taxPrice: number;
//   totalPrice: number;
//   orderItems: OrderItem[];
//   isDelivered: boolean;
//   deliveredAt: Date | null;
//   createdAt: Date;
//   user: User | null;
// };

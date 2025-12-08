import { getMyCart } from "@/actions/cart.actions";
import CartAside from "./cart-aside";

export default async function CartModal() {
  const cart = await getMyCart();
  return <CartAside cart={cart} />;
}

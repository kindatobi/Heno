export default function CartModal({
  cartOpen,
  setCartOpen,
}: {
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (cartOpen)
    return (
      <aside className="fixed inset-0 bg-black/50 z-50 flex justify-end">
        <div className="w-[30%] bg-amber-950">
          <div className="flex justify-between">
            <h2>YOUR BAG</h2>
            <p
              className="cursor-pointer"
              onClick={() => setCartOpen((prev) => !prev)}
            >
              CLOSE
            </p>
          </div>
        </div>
      </aside>
    );
}

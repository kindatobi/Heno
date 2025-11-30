import ShopProductCard from "@/components/shop-product-card";
import sampleData from "@/db/sample-data";

export default function ShopPage() {
  const shopProducts = sampleData.products;
  return (
    <div>
      <p> Hey there, what do you wanna get</p>
      <div>
        {shopProducts.map((product) => (
          <ShopProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}

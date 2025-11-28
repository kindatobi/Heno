import sampleData from "@/db/sample-data";
import Image from "next/image";

export default function Home() {
  const products = sampleData.products;
  return (
    <div>
      <main>
        {products.map((product) => (
          <div key={product.slug}>
            <Image
              src={product?.images?.[0]}
              alt={product.name}
              width={100}
              height={100}
            />
            <div>
              <p>{product.name}</p>
              <p>{product.brand}</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

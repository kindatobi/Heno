import sampleData from "@/db/sample-data";
import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const products = await prisma.product.findMany();
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
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

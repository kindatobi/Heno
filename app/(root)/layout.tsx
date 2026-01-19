import ConditionalFooter from "@/components/conditional-footer";

import Header from "@/components/header";
import { getAllCategories, getProductsCount } from "@/lib/dal";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getAllCategories();
  const categoryCount = await getProductsCount();

  return (
    <>
      <Header categories={categories} categoryCount={categoryCount} />
      <main>{children}</main>
      <ConditionalFooter />
    </>
  );
}

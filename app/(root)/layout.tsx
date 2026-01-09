import Footer from "@/components/footer";
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
    <div className="flex h-screen flex-col">
      <Header categories={categories} categoryCount={categoryCount} />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";

export default function AdminSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form>
      <Input
        type="search"
        placeholder="Search..."
        name="query"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        defaultValue={searchParams.get("query") || ""}
        className="md:w-[100px] lg:w-[300px]"
      />
      <button className="sr-only" type="submit"></button>
    </form>
  );
}

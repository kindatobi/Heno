"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

type PaginationProps = {
  page: number;
  totalPages: number;
};

export default function Pagination({ page, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    if (newPage) {
      params.set("page", newPage.toString());
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        disabled={Number(page) <= 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </Button>
      <Button
        size={"lg"}
        variant="outline"
        className="w-28"
        disabled={Number(page) >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </Button>
    </div>
  );
}

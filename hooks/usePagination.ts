import { useRouter } from "next/router";
import { useState } from "react";

export const usePagination = (initialPage: number) => {
  const router = useRouter();

  const [page, setPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    setPage(page);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

  return { page, handlePageChange };
};

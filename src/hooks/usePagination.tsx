import { useCallback, useState } from "react";
import useSearchParams from "./useSearchParams";
import useNavigation from "./useNavigation";

export const usePagination = () => {
  const [page, setPage] = useState(0);
  const { navigate } = useNavigation();
  const { searchParams, setSearchParams } = useSearchParams();
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const rowsPerPage = parseInt(searchParams.noRegistro || "10", 10);

  const handleChangePage = useCallback(
    (newPage: number) => {
      setPage(newPage);

      setSearchParams({
        ...searchParams,
        pagina: (newPage + 1).toString(),
        noRegistro: rowsPerPage.toString(),
      });
      setLastUpdate(new Date());
    },

    [searchParams, rowsPerPage, setSearchParams]
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newRowsPerPage = event.target.value;
      setPage(0);

      setSearchParams({
        ...searchParams,
        pagina: "1",
        noRegistro: newRowsPerPage.toString(),
      });
      setLastUpdate(new Date());
    },
    [searchParams, setSearchParams]
  );

  const handleUpdate = useCallback(() => {
    setSearchParams({ ...searchParams });
    setLastUpdate(new Date());
  }, []);

  return {
    page,
    lastUpdate,
    rowsPerPage,
    searchParams,
    navigate,
    handleUpdate,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};

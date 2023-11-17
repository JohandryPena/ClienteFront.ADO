import { useSearchParams as useSearchParamsRouter } from "react-router-dom";

type TJson = { [key: string]: string | undefined };

type SearchParamsObject = {
  searchParams: TJson;
  setSearchParams: (searchParams: TJson) => void;
};

const useSearchParams = (): SearchParamsObject => {
  const [searchParams, setSearchParamsRouter] = useSearchParamsRouter();

  const setSearchParams = (newSearchParams: TJson) => {
    setSearchParamsRouter({
      ...searchParams,
      ...newSearchParams,
    });
  };

  return {
    searchParams: Object.fromEntries(searchParams),
    setSearchParams,
  };
};

export default useSearchParams;

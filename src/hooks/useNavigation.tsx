import { useLocation, useNavigate, useParams } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const handleClickNavigate = (redirect: string) => {
    navigate(`${location.pathname}/${redirect}`);
  };

  const handleGoBack = () => navigate(-1);

  const handleNavigateType = ({
    item,
    type,
    id,
  }: {
    item: unknown;
    type: string;
    id?: number | string;
  }) => {
    navigate(`${location.pathname}/${type}${id ? `/${id}` : ""}`, {
      state: item,
    });
  };

  return {
    params,
    location,
    navigate,
    handleGoBack,
    handleNavigateType,
    handleClickNavigate,
  };
};
export default useNavigation;

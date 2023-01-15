import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUrl = (idFilter: string | undefined, currentPage: number) => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams();
    if (idFilter) {
      params.append("id", idFilter);
    } else {
      params.append("page", currentPage.toString());
    }
    navigate(
      {
        pathname: "/",
        search: `?${params}`,
      },
      { replace: true }
    );
  }, [currentPage, idFilter, navigate]);
};

export default useUrl;

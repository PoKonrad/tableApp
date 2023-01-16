import axios from "axios";
import { useQuery } from "react-query";
import type { ApiResp } from "../types/apiResp";
import type { AxiosError } from "axios";

const useApi = (currentPage: number, idFilter: string) => {
  return useQuery<ApiResp, AxiosError>(
    ["/products", currentPage, idFilter],
    async (): Promise<ApiResp> => {
      const params = new URLSearchParams({
        per_page: "5",
        page: (currentPage + 1).toString(),
      });

      if (idFilter) {
        params.append("id", idFilter);
      }

      const resp = await axios.get(`https://reqres.in/api/products`, {
        params,
      });

      return resp.data;
    }
  );
};

export default useApi;

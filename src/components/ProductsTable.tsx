import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Typography,
  TableFooter,
  TablePagination,
  TextField,
  Alert,
  AlertTitle,
  Skeleton,
  TableBody,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import { useQuery } from "react-query";
import TableItem from "./TableItem";
import type { ApiResp } from "../types/apiResp";
import { useSearchParams } from "react-router-dom";
import useUrl from "../hooks/useUrl";
import axios from "axios";

const ProductsTable = () => {
  const [params] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    parseInt(params.get("page") || "0")
  );
  const [idFilter, setIdFilter] = useState<string>(params.get("id") || "");
  useUrl(idFilter, currentPage);

  // Handle Fetch
  const { data, error, isError, isLoading } = useQuery<ApiResp, Error>(
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

  // Remove any characters that are not numbers
  // because firefox has poor type="number" support.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.replace(/\D/g, "");

    setIdFilter(result);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 2,
        paddingTop: 1,
      }}
    >
      <TextField
        label="ID Filter"
        onChange={handleInputChange}
        value={idFilter}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography minWidth="3rem">ID</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography>NAME</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography>YEAR</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isError ? (
            <TableRow>
              <TableCell colSpan={4}>
                <Alert severity="error">
                  <AlertTitle>An Error has occured</AlertTitle>
                  Error Code: {error?.message}
                </Alert>
              </TableCell>
            </TableRow>
          ) : null}

          {isLoading ? (
            <TableRow>
              <TableCell align="center" colSpan={3}>
                <Skeleton />
              </TableCell>
            </TableRow>
          ) : null}

          {isLoading || isError ? null : Array.isArray(data?.data) ? (
            data?.data.map((el) => <TableItem tableItem={el} key={el.id} />)
          ) : (
            <TableItem tableItem={data!.data} />
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={data?.total || 0}
              page={currentPage}
              rowsPerPage={data?.per_page || 0}
              rowsPerPageOptions={[data?.per_page || 1]}
              onPageChange={(e, newValue) => {
                setCurrentPage(newValue);
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;

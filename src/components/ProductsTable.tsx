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
  LinearProgress,
  Fade,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import TableItem from "./TableItem";
import type { ApiResp } from "../types/apiResp";
import { useParams, useSearchParams } from "react-router-dom";

const ProductsTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [idFilter, setIdFilter] = useState<string>();
  let { current_page, id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams({
    uwu: "uwu",
    nice: "a",
  });

  const { data, error, isError, isLoading } = useQuery<ApiResp, Error>(
    ["/products", currentPage, idFilter],
    async (): Promise<ApiResp> => {
      const params = new URLSearchParams({
        per_page: "5",
        page: currentPage + "1",
      });

      if (idFilter) {
        params.append("id", idFilter);
      }

      const resp = await fetch(
        `https://reqres.in/api/products?${params.toString()}`
      );

      if (!resp.ok) {
        throw new Error(resp.status.toString());
      }
      const respJson = await resp.json();

      return respJson;
    }
  );
  return (
    <TableContainer component={Paper}>
      <Fade in={isLoading}>
        <LinearProgress />
      </Fade>
      <Fade in={isError}>
        <Alert severity="error">
          <AlertTitle>An Error has occured</AlertTitle>
          Error Code: {error?.message}
        </Alert>
      </Fade>
      <TextField
        type="number"
        label="ID Filter"
        onChange={(e) => setIdFilter(e.target.value)}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>ID</Typography>
            </TableCell>
            <TableCell>
              <Typography>NAME</Typography>
            </TableCell>
            <TableCell>
              <Typography>YEAR</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        {isLoading || isError ? null : Array.isArray(data?.data) ? (
          data?.data.map((el) => <TableItem tableItem={el} key={el.id} />)
        ) : (
          <TableItem tableItem={data!.data} />
        )}
        <TableFooter>
          <TablePagination
            count={data?.total || 0}
            page={currentPage}
            rowsPerPage={data?.per_page || 0}
            rowsPerPageOptions={[data?.per_page || 1]}
            onPageChange={(e, newValue) => {
              setCurrentPage(newValue);
              console.log(newValue);
            }}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;

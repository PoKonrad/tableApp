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
  Collapse
} from '@mui/material';
import { useState } from 'react';
import React from 'react';
import TableItem from './TableItem';
import { useSearchParams } from 'react-router-dom';
import useUrl from '../hooks/useUrl';
import useApi from '../hooks/useApi';

const ProductsTable = () => {
  const [params] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(parseInt(params.get('page') || '0'));
  const [idFilter, setIdFilter] = useState<string>(params.get('id') || '');
  useUrl(idFilter, currentPage);

  const { data, error, isError, isLoading } = useApi(currentPage, idFilter);
  console.log(error);

  const emptyRows = Array.isArray(data?.data) ? Math.max(0, 5 - (data?.data?.length || 0)) : 4;

  console.log(emptyRows);
  // Remove any characters that are not numbers
  // because firefox has poor type="number" support.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.replace(/\D/g, '');
    setIdFilter(result);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 2,
        paddingTop: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
      <TextField label="ID Filter" onChange={handleInputChange} value={idFilter} />
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
        <TableBody
          sx={{
            height: 285
          }}>
          {isLoading ? (
            <TableRow
              sx={{
                height: 57,
                boxSizing: 'border-box'
              }}>
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

          {emptyRows > 0 && (
            <TableRow style={{ height: 57 * emptyRows }}>
              <TableCell colSpan={3} />
            </TableRow>
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
          <TableRow>
            <TableCell
              colSpan={3}
              sx={{
                padding: 0
              }}>
              <Collapse in={isError} unmountOnExit>
                <Alert severity="error">
                  <AlertTitle>An Error has occured</AlertTitle>
                  {error?.message}
                </Alert>
              </Collapse>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;

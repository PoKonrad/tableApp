import {
  Box,
  Grid,
  Modal,
  Paper,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../features/modal/modalSlice";
import { ApiProduct } from "../types/apiResp";

type TableItemProps = {
  tableItem: {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  };
};

const TableItem: React.FC<TableItemProps> = ({ tableItem }) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      <TableRow
        data-testid="tableRow"
        onClick={() => dispatch(showModal(tableItem))}
        sx={{
          backgroundColor: tableItem.color,
        }}
      >
        <TableCell>{tableItem.id}</TableCell>
        <TableCell>{tableItem.name}</TableCell>
        <TableCell>{tableItem.year}</TableCell>
      </TableRow>
    </tbody>
  );
};

export default TableItem;

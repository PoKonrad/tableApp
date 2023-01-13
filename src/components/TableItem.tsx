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

type TableItemProps = {
  tableItem: {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  };
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  p: 4,
};

const TableItem: React.FC<TableItemProps> = ({ tableItem }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={style}>
          <Grid container item direction="column">
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Typography>ID</Typography>
              </Grid>
              <Grid item>
                <Typography>{tableItem.id}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Typography>NAME</Typography>
              </Grid>
              <Grid item>
                <Typography>{tableItem.name}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Typography>COLOR</Typography>
              </Grid>
              <Grid item>
                <Typography>{tableItem.color}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Typography>YEAR</Typography>
              </Grid>
              <Grid item>
                <Typography>{tableItem.year}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Typography>PANTONE VALUE</Typography>
              </Grid>
              <Grid item>
                <Typography>{tableItem.pantone_value}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <TableRow
        onClick={() => setModalOpen(true)}
        sx={{
          backgroundColor: tableItem.color,
        }}
      >
        <TableCell>{tableItem.id}</TableCell>
        <TableCell>{tableItem.name}</TableCell>
        <TableCell>{tableItem.year}</TableCell>
      </TableRow>
    </>
  );
};

export default TableItem;

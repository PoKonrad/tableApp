import { Modal, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, modalStateSelector } from "../features/modal/modalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  p: 4,
};

const PoductsModal: React.FC = () => {
  const modalState = useSelector(modalStateSelector);
  const dispatch = useDispatch();
  return (
    <Modal open={modalState.isShown} onClose={() => dispatch(hideModal())}>
      <Box sx={style}>
        <Grid container item direction="column">
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography>ID</Typography>
            </Grid>
            <Grid item>
              <Typography>{modalState.modalData.id}</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography>NAME</Typography>
            </Grid>
            <Grid item>
              <Typography>{modalState.modalData.name}</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography>COLOR</Typography>
            </Grid>
            <Grid item>
              <Typography>{modalState.modalData.color}</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography>YEAR</Typography>
            </Grid>
            <Grid item>
              <Typography>{modalState.modalData.year}</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography>PANTONE VALUE</Typography>
            </Grid>
            <Grid item>
              <Typography>{modalState.modalData.pantone_value}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default PoductsModal;

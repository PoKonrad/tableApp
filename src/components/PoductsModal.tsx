import { Grid, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, modalStateSelector } from '../features/modal/modalSlice';

const PoductsModal: React.FC = () => {
  const modalState = useSelector(modalStateSelector);
  const dispatch = useDispatch();
  return (
    <Dialog open={modalState.isShown} onClose={() => dispatch(hideModal())} maxWidth="xs" fullWidth>
      <DialogTitle>Item Details</DialogTitle>
      <DialogContent>
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
      </DialogContent>
    </Dialog>
  );
};

export default PoductsModal;

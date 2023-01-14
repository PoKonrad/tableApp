import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ApiProduct } from "../../types/apiResp";

interface ModalState {
  isShown: boolean;
  modalData: ApiProduct;
}

const initialState: ModalState = {
  isShown: false,
  modalData: {
    id: 0,
    name: "",
    year: 0,
    color: "",
    pantone_value: "",
  },
};

export const modalSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ApiProduct>) => {
      state.isShown = true;
      state.modalData = action.payload;
    },
    hideModal: (state) => {
      state.isShown = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const modalStateSelector = (state: RootState) => state.modal;
export default modalSlice.reducer;

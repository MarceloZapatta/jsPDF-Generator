import { createSlice } from '@reduxjs/toolkit';

interface PdfState {
  items: Array<any>;
}

// Define the initial state using that type
const initialState: PdfState = {
  items: [],
};

export const pdfSlice = createSlice({
  name: 'pdf',
  initialState,
  reducers: {
    setItems: (state, action) => {
      const stateCurrent = state;
      stateCurrent.items = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, setItems } = pdfSlice.actions;

export default pdfSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    filter: "k",
  },
  reducers: {
    destroy: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
    },
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    filtre: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { destroy, addNote, filtre } = notesSlice.actions;
export default notesSlice.reducer;

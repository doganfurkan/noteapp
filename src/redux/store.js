import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "./Notes/notesSlice"

export const store = configureStore({
    reducer:{
        notes: notesReducer,
    },
})
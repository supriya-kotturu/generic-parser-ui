import { createSlice } from "@reduxjs/toolkit";
import { Note } from "@/types";
import { RootState } from "@/store";

const defaultNotes: Note[] = [];

const notesSlice = createSlice({
  name: "todos",
  initialState: defaultNotes,
  reducers: {
    noteAdded(state, action: { payload: Note; type: string }) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        date: new Date(),
        content: action.payload.content,
      });
    },
  },
});

export const { noteAdded } = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;

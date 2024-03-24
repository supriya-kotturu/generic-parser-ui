import { createSlice } from "@reduxjs/toolkit";
import { createId } from "@paralleldrive/cuid2";
import { Note } from "@/types";
import { RootState } from "@/store";

type AddNotePayload = { title: string; content: string };
type UpdateNotePayload = { id: string; title: string; content: string };
type DeletePayload = { id: string };

const defaultNotes: Note[] = [];

const notesSlice = createSlice({
  name: "todos",
  initialState: defaultNotes,
  reducers: {
    addNote(state, action: { payload: AddNotePayload; type: string }) {
      state.push({
        id: createId(),
        title: action.payload.title,
        createdTimestamp: Date.now(),
        content: action.payload.content,
      });
    },
    updateNote(state, action: { payload: UpdateNotePayload; type: string }) {
      const updatedState = structuredClone(state);
      const newNote = updatedState.filter(
        (note) => note.id === action.payload.id,
      )[0];
      const noteId = updatedState.findIndex(
        (note) => note.id === action.payload.id,
      );

      newNote.title = action.payload.title;
      newNote.content = action.payload.content;
      newNote.updatedTimestamp = Date.now();

      updatedState[noteId] = newNote;
      return updatedState;
    },
    deleteNote(state, action: { payload: DeletePayload; type: string }) {
      const updatedState = structuredClone(state).filter(
        (note) => note.id !== action.payload.id,
      );
      return updatedState;
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;

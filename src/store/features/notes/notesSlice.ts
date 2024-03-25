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
      return state.concat({
        id: createId(),
        title: action.payload.title,
        createdTimestamp: Date.now(),
        content: action.payload.content,
      });
    },
    updateNote(state, action: { payload: UpdateNotePayload; type: string }) {
      const { id, title, content } = action.payload;

      return state.map((note) => {
        if (note.id !== id) return note;

        return {
          ...note,
          title,
          content,
          updatedTimestamp: Date.now(),
        };
      });
    },
    deleteNote(state, action: { payload: DeletePayload; type: string }) {
      console.log({ action, state });
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;

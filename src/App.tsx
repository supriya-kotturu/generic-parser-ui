import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { addNote } from "./store/features/notes/noteSlice";
import { AddNewNote } from "./components/AddNewNote";
import notesLogo from "./assets/notes.svg";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import "./App.css";

function App() {
  const [showNoteForm, setShowNoteForm] = useState(false);
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes);

  const createNote = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    console.log({ title, content });
    dispatch(addNote({ title, content }));
    setShowNoteForm(false);
  };
  console.log({ notes });

  return (
    <>
      <div className="flex items-center">
        <img src={notesLogo} className="logo" alt="Notes logo" />
        <span className="text-2xl font-bold">Notebook</span>
      </div>
      <div className="w-3/4 m-auto">
        {showNoteForm ? (
          <NoteForm onCreate={createNote} />
        ) : (
          <AddNewNote onAdd={() => setShowNoteForm(true)} />
        )}
        {notes && <NotesList notes={notes} />}
      </div>
    </>
  );
}

export default App;

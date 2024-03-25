import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  addNote,
  updateNote,
  deleteNote,
} from "./store/features/notes/notesSlice";
import { AddNewNote } from "./components/AddNewNote";
import notesLogo from "./assets/notes.svg";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import "./App.css";

function App() {
  const notes = useAppSelector((state) => state.notes);
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const selectedNode = notes?.filter((note) => note.id === selectedNoteId)[0];
  const dispatch = useAppDispatch();

  const createNote = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    dispatch(addNote({ title, content }));
    setShowNoteForm(false);
  };

  const editNote = ({ title, content }: { title: string; content: string }) => {
    selectedNoteId &&
      dispatch(updateNote({ id: selectedNoteId, title, content }));
    setSelectedNoteId(null);
    setShowNoteForm(false);
  };

  const deleteNoteFromList = (id: string) => {
    console.log({ del: id });
    dispatch(deleteNote({ id }));
  };

  return (
    <>
      <div className="flex items-center">
        <img src={notesLogo} className="logo" alt="Notes logo" />
        <span className="text-2xl font-bold">Notebook</span>
      </div>
      <div className="w-3/4 m-auto">
        {showNoteForm ? (
          <NoteForm
            onSubmit={selectedNoteId ? editNote : createNote}
            note={selectedNode}
          />
        ) : (
          <AddNewNote onAdd={() => setShowNoteForm(true)} />
        )}
        {notes && !showNoteForm && (
          <NotesList
            notes={notes.map((note) => ({
              ...note,
              onEdit: () => {
                setSelectedNoteId(note.id);
                setShowNoteForm(true);
              },
              onDelete: () => deleteNoteFromList(note.id),
            }))}
          />
        )}
      </div>
    </>
  );
}

export default App;

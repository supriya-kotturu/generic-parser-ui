import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { addNote } from "./store/features/notes/noteSlice";
import reactLogo from "./assets/react.svg";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import "./App.css";

function App() {
  const [showNoteForm, setShowNoteForm] = useState(false);
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes);

  const createNote = ({ title, content }: { title: string; content: string }) =>
    dispatch(addNote({ title, content }));

  console.log({ notes });

  return (
    <>
      <div onClick={() => setShowNoteForm(true)}>+</div>
      {showNoteForm && <NoteForm onCreate={createNote} />}
      {notes && <NotesList notes={notes} />}
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            dispatch(
              addNote({
                title: "Work day tasks",
                content: "<p>test content</p>",
              }),
            )
          }
        >
          count is
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

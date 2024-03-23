import { useAppDispatch, useAppSelector } from "./store/hooks";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { noteAdded } from "./store/features/notes/noteSlice";

function App() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes);

  console.log({ notes });

  return (
    <>
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
              noteAdded({
                title: "Work day tasks",
                id: "9029",
                date: new Date(),
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

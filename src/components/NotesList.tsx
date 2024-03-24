import { updateNote } from "@/store/features/notes/noteSlice";
import { useAppDispatch } from "@/store/hooks";
import { Note } from "@/types";

type NotesListProps = {
  notes: Note[];
};

const NotesList = ({ notes }: NotesListProps) => {
  const dispatch = useAppDispatch();

  const editNote = ({
    id,
    title,
    content,
  }: {
    id: string;
    title: string;
    content: string;
  }) => dispatch(updateNote({ id, title, content }));

  console.log({ notes, editNote });
  return <div>Enter</div>;
};

export default NotesList;

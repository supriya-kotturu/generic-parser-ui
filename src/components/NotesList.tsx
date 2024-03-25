import parse from "html-react-parser";
import { updateNote } from "@/store/features/notes/noteSlice";
import { useAppDispatch } from "@/store/hooks";
import { Note } from "@/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type NotesListProps = {
  notes: Note[];
};

const NoteItem = ({ title, content, createdTimestamp }: Note) => {
  const createdOn = new Date(createdTimestamp).toLocaleString();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{createdOn}</CardDescription>
      </CardHeader>
      <CardContent>{parse(content)}</CardContent>
    </Card>
  );
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
  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NotesList;

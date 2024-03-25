import parse from "html-react-parser";
import { Note } from "@/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

type NoteItem = Note & {
  onEdit: () => void;
  onDelete: () => void;
};

type NotesListProps = {
  notes: NoteItem[];
};

const NoteItem = ({
  title,
  content,
  createdTimestamp,
  onEdit,
  onDelete,
}: NoteItem) => {
  const createdOn = new Date(createdTimestamp).toLocaleString();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{createdOn}</CardDescription>
      </CardHeader>
      <CardContent>{parse(content)}</CardContent>
      <CardFooter className="gap-2">
        <Button size="icon" variant="outline" onClick={onEdit}>
          <span className="material-symbols-outlined">edit_note</span>
        </Button>
        <Button size="icon" variant="outline" onClick={onDelete}>
          <span className="material-symbols-outlined">delete</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

const NotesList = ({ notes }: NotesListProps) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NotesList;

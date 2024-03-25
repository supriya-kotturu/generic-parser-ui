import { AddIcon } from "./icons/AddIcon";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const AddNewNote = ({ onAdd }: { onAdd: () => void }) => {
  return (
    <Card onClick={onAdd} className="cursor-pointer">
      <CardHeader>
        <CardTitle className="mx-auto py-0 px-2">
          <AddIcon size={34} />
        </CardTitle>
        <CardDescription>Add new note</CardDescription>
      </CardHeader>
    </Card>
  );
};

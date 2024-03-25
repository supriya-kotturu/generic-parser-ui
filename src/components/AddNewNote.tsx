import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const AddNewNote = ({ onAdd }: { onAdd: () => void }) => {
  return (
    <Card onClick={onAdd} className="cursor-pointer">
      <CardHeader>
        <CardTitle className="mx-auto py-0 px-2">
        <span className="material-symbols-outlined text-[42px]" >add_circle</span>
        </CardTitle>
        <CardDescription>Add new note</CardDescription>
      </CardHeader>
    </Card>
  );
};

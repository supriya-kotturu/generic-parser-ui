import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

type NoteFormProps = {
  onCreate: ({ title, content }: { title: string; content: string }) => void;
};

const NoteForm = ({ onCreate }: NoteFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Card>
      <CardHeader />
      <CardContent className="grid grid-cols-1 gap-4">
        <div className="flex items-center gap-4">
          <Label className="w-[84px] text-left" htmlFor="title">
            Title
          </Label>
          <Input
            id="title"
            placeholder="Mom's easy tax saving tips."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex items-center gap-4">
          <Label className="w-[84px] text-left" htmlFor="description">
            Description
          </Label>
          <Input id="descrition" placeholder="" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => onCreate({ title, content })}>
          SAVE NOTE
        </Button>
      </CardFooter>
      NoteForm
      <button
        onClick={() => onCreate({ title: "test", content: "test content" })}
      >
        Create
      </button>
    </Card>
  );
};

export default NoteForm;

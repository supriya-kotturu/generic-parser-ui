import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import Tiptap from "./editor/TipTap";
import { useTipTapEditor } from "./editor/useTipTapEditor";

type NoteFormProps = {
  onCreate: ({ title, content }: { title: string; content: string }) => void;
};

const NoteForm = ({ onCreate }: NoteFormProps) => {
  const [title, setTitle] = useState("");
  const { editor } = useTipTapEditor();


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
            type="text"
            placeholder="Mom's easy tax saving tips."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <Tiptap />
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() =>
            onCreate({ title, content: editor ? editor.getHTML() : "no text" })
          }
        >
          SAVE NOTE
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NoteForm;

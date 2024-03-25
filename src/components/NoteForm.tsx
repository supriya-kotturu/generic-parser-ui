import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import Tiptap from "./editor/TipTap";
import { Note } from "@/types";
import { cn } from "@/lib/utils";

type NoteFormProps = {
  onSubmit: ({ title, content }: { title: string; content: string }) => void;
  note?: Note;
};

const NoteForm = ({ onSubmit, note }: NoteFormProps) => {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  return (
    <Card>
      <CardHeader />
      <CardContent className={cn("grid grid-cols-1 gap-4")}>
        <div className={cn("flex items-center gap-4")}>
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
        <Tiptap updateCb={setContent} content={content} />
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => {
            //TODO : update validation
            onSubmit({ title, content });
          }}
        >
          SAVE NOTE
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NoteForm;

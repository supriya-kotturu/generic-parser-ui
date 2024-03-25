import { useMemo } from "react";
import { Editor } from "@tiptap/react";
import { Button } from "../ui/button";

type Action = {
  onClick: () => void;
  diasbled?: boolean;
  className: string;
  icon: string;
};

export const MenuBar = ({ editor }: { editor?: Editor }) => {
  if (!editor) {
    return null;
  }

  const actions: Action[] = useMemo<Action[]>(
    () =>
      [
        {
          onClick: () => editor.chain().focus().toggleBold().run(),
          diasbled: !editor.can().chain().focus().toggleBold().run(),
          className: editor.isActive("bold") ? "is-active" : "",
          icon: "format_bold",
        },
        {
          onClick: () => editor.chain().focus().toggleItalic().run(),
          disabled: !editor.can().chain().focus().toggleItalic().run(),
          className: editor.isActive("italic") ? "is-active" : "",
          icon: "format_italic",
        },
        {
          onClick: () => editor.chain().focus().toggleStrike().run(),
          disabled: !editor.can().chain().focus().toggleStrike().run(),
          className: editor.isActive("strike") ? "is-active" : "",
          icon: "format_strikethrough",
        },
        {
          onClick: () => editor.chain().focus().toggleCode().run(),
          disabled: !editor.can().chain().focus().toggleCode().run(),
          className: editor.isActive("code") ? "is-active" : "",
          icon: "code",
        },
        {
          onClick: () => editor.chain().focus().undo().run(),
          disabled: !editor.can().chain().focus().undo().run(),
          className: "",
          icon: "undo",
        },
        {
          onClick: () => editor.chain().focus().redo().run(),
          diasbled: !editor.can().chain().focus().redo().run(),
          className: "",
          icon: "redo",
        },
      ] as Action[],
    []
  );

  return (
    <div className="grid grid-cols-8 bg-gray-50 p-2 gap-2">
      {actions.map(({ onClick, diasbled, className, icon }) => (
        <Button
          key={icon}
          size="icon"
          variant="outline"
          onClick={onClick}
          disabled={diasbled}
          className={className}
        >
          <span className="material-symbols-outlined">{icon}</span>
        </Button>
      ))}
    </div>
  );

  // return (
  //   <div className="grid w-100 grid-rows-2 grid-cols-8 gap-2">
  //
  //
  //
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().unsetAllMarks().run()}
  //     >
  //       clear marks
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().clearNodes().run()}
  //     >
  //       clear nodes
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().setParagraph().run()}
  //       className={editor.isActive("paragraph") ? "is-active" : ""}
  //     >
  //       paragraph
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
  //       className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
  //     >
  //       h1
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
  //       className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
  //     >
  //       h2
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
  //       className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
  //     >
  //       h3
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
  //       className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
  //     >
  //       h4
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
  //       className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
  //     >
  //       h5
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
  //       className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
  //     >
  //       h6
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().toggleBulletList().run()}
  //       className={editor.isActive("bulletList") ? "is-active" : ""}
  //     >
  //       <BulletList />
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().toggleOrderedList().run()}
  //       className={editor.isActive("orderedList") ? "is-active" : ""}
  //     >
  //       <OrderList />
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().toggleCodeBlock().run()}
  //       className={editor.isActive("codeBlock") ? "is-active" : ""}
  //     >
  //       code block
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().toggleBlockquote().run()}
  //       className={editor.isActive("blockquote") ? "is-active" : ""}
  //     >
  //       blockquote
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().setHorizontalRule().run()}
  //     >
  //       horizontal rule
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().setHardBreak().run()}
  //     >
  //       hard break
  //     </Button>
  //     <Button
  //       size="icon"
  //       onClick={() => editor.chain().focus().setColor("#958DF1").run()}
  //       className={
  //         editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
  //       }
  //     >
  //       purple
  //     </Button>
  //   </div>
  // );
};

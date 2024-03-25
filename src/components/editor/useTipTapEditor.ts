import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
// import { Color } from "@tiptap/extension-color";
// import ListItem from "@tiptap/extension-list-item";
// import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";

export const useTipTapEditor = (
  updateCb: (str: string) => void,
  content: string,
) => {
  const extensions = [
    // Color.configure({ types: [TextStyle.name, ListItem.name] }),
    // TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
    Highlight,
    Typography,
  ];

  const editor = useEditor({
    editable: true,
    autofocus: true,
    onUpdate: ({ editor }) => updateCb(editor.getHTML()),
    editorProps: {
      attributes: { class: "flex flex-wrap w-full" },
    },
    extensions,
    content,
  });

  return { editor };
};

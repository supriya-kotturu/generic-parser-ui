import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";

export const useTipTapEditor = () => {
  const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
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
  const content =
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus nisi in facere minima rerum modi assumenda id repellat! Inventore officiis officia consectetur molestiae ducimus similique enim eos beatae vel!</p>";

  const editor = useEditor({
    editable: true,
    autofocus: true,
    editorProps: {
      attributes: { class: "flex flex-wrap w-full" },
    },
    extensions,
    content,
  });

  return { editor };
};

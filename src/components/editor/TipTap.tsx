import { EditorContent, FloatingMenu, BubbleMenu } from "@tiptap/react";
import { useTipTapEditor } from "./useTipTapEditor";
import { MenuBar } from "./MenuBar";
import "./styles.css";

const Tiptap = () => {
  const { editor } = useTipTapEditor();

  if (!editor) return null;

  return (
    <>
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor}><MenuBar editor={editor} /></FloatingMenu>
      <BubbleMenu editor={editor}><MenuBar editor={editor} /></BubbleMenu>
    </>
  );
};

export default Tiptap;

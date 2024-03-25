import { EditorContent, FloatingMenu, BubbleMenu } from "@tiptap/react";
import { useTipTapEditor } from "./useTipTapEditor";
import { MenuBar } from "./MenuBar";
import "./styles.css";

const Tiptap = () => {
  const { editor } = useTipTapEditor();

  if (!editor) return null;

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor}>float</FloatingMenu>
      <BubbleMenu editor={editor}>bubble</BubbleMenu>
    </>
  );
};

export default Tiptap;

import { EditorContent, FloatingMenu, BubbleMenu } from "@tiptap/react";
import { useTipTapEditor } from "./useTipTapEditor";
import { MenuBar } from "./MenuBar";
import "./styles.css";

const Tiptap = () => {
  const { editor } = useTipTapEditor();
 
  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor} />
      <BubbleMenu editor={editor} />
    </>
  );
};

export default Tiptap;

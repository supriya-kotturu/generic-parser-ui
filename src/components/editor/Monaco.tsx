import Editor from "@monaco-editor/react";
import { EditorProps } from "@monaco-editor/react";

type MonacoProps = EditorProps & {
  title: string;
  classname?: string;
  readonly?: boolean;
};

export const Monaco = (props: MonacoProps) => {
  const {
    language = "json",
    onChange,
    title,
    height,
    className,
    readonly,
  } = props;
  return (
    <div id={`${title}-editor`} className={className || "w-1/2 flex-1"}>
      <h2 className="text-xl font-bold p-4">{title}</h2>
      <Editor
        height={height || "40vh"}
        theme="vs-dark"
        language={language}
        onChange={onChange}
        options={{
          readOnly: readonly || false,
          domReadOnly: readonly || false,
          wordWrap: "on",
          formatOnPaste: true,
          formatOnType: true,
          autoIndent: "full",
          tabSize: 2,
        }}
        {...props}
      />
      <div>lang : {language} </div>
    </div>
  );
};

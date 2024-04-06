import { useEffect, useState } from "react";
import { Monaco } from "./components/editor/Monaco";
import notesLogo from "./assets/notes.svg";
import "./App.css";
import { ParsingOptions } from "./components/ParsingOptions";
import { Button } from "./components/ui/button";
import { parseData } from "./lib/utils";

const defaultJSON = `{"type": "json", "name" : "test data"}`;
const defaultXML = `<type>json</type><name>test data</name>`;

function App() {
  const [type, setType] = useState<"xml" | "json">("json");
  const [config, setConfig] = useState(defaultJSON);
  const [input, setInput] = useState(defaultJSON);
  const [parsedData, setParsedData] = useState<null | object>(null);

  const options = [
    { value: "json", name: "JSON" },
    { value: "xml", name: "XML" },
  ];

  useEffect(() => {
    type === "json" ? setInput(defaultJSON) : setInput(defaultXML);
    setParsedData(null);
  }, [type]);

  const parseInputData = (
    config: string,
    input: string,
    type: "xml" | "json"
  ) => {
    const { error, result } = parseData(config, input, type);
    console.log(result);
    result && setParsedData(result);
    error && alert(error);
  };

  return (
    <>
      <div className="flex items-center">
        <img src={notesLogo} className="logo" alt="Notes logo" />
        <span className="text-2xl font-bold">Parse on par!</span>
      </div>
      <div className="flex w-full content-end justify-end mr-16">
        <ParsingOptions
          options={options}
          selectedOption={type}
          onValueChange={setType}
        />
      </div>
      <div className="flex flex-1  bg-gray-100">
        <Monaco
          title="Config"
          onChange={(val) => val && setConfig(val)}
          value={config}
        />
        <Monaco
          title={`Input ${type.toUpperCase()}`}
          language={type}
          onChange={(val) => val && setInput(val)}
          defaultValue={type == "xml" ? defaultXML : defaultJSON}
          value={input}
        />
      </div>
      <Button
        className="m-8"
        onClick={() => {
          parseInputData(config, input, type);
        }}
      >
        PARSE DATA
      </Button>
      {parsedData && (
        <Monaco
          title="parsed JSON"
          width="100%"
          readonly={true}
          language={type}
          value={JSON.stringify(parsedData)}
          className="w-full flex-1"
        />
      )}
    </>
  );
}

export default App;

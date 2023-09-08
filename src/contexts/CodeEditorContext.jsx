import { createContext, useState } from "react";

export const CodeEditorContext = createContext();

export const CodeEditorProvider = ({ children }) => {
  const [codeEditorData, setCodeEditorData] = useState({
    width: "100vw",
    height: "80vh",
    value: localStorage.getItem("text-content") || "",
    language: localStorage.getItem("language") || "javascript",
    theme: localStorage.getItem("theme") || "vs-dark",
    options: {
      minimap: {
        enabled: true,
      },
      wordWrap: "on",
      tabSize: 4,
    },
    handleEditorChange: (value) => {
      localStorage.setItem("text-content", value);
    },
  });

  return (
    <CodeEditorContext.Provider value={[codeEditorData, setCodeEditorData]}>
      {children}
    </CodeEditorContext.Provider>
  );
};

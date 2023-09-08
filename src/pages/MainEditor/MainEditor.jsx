import Editor from "@monaco-editor/react";
import { useContext } from "react";
import { CodeEditorContext } from "../../contexts/CodeEditorContext"
import SettingBar from "./SettingBar"
import ProjectStructure from "./ProjectStructure"
import Terminal from "./Terminal"

export default function MainEditor() {
  const {
    width,
    height,
    value,
    language,
    theme,
    options,
    handleEditorChange
  } = useContext(CodeEditorContext)[0]

  const setCodeEditorValue = useContext(CodeEditorContext)[1]


  return (
    <div className="main-container">
      <SettingBar />
      <Editor
        width={width}
        height={height}
        defaultLanguage={language}
        value={value}
        theme={theme}
        options={options}
        onChange={handleEditorChange}
      />
    </div>


    
  );
}
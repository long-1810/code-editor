import { useState } from "react";
import { useContext } from "react";
import { CodeEditorContext } from "../../contexts/CodeEditorContext";

export default function SettingBar() {
  const { width, height, value, language, theme, options, handleEditorChange } =
    useContext(CodeEditorContext)[0];

  const setCodeEditorValue = useContext(CodeEditorContext)[1];

  function handleSelect(event) {
    const {name, value} = event.target
    setCodeEditorValue(oldCodeEditorValue => ({
      ...oldCodeEditorValue,
      [name]: value,
    }))
  }

  console.log(language,theme)
  return (
    <div className="setting-container">
      <div className="option" onChange={handleSelect}>
        <label htmlFor="theme">Themes</label>
        <select name="theme" id="theme">
          <option value="vs-dark">
            VS Dark
          </option>
          <option value="vs-light">
            VS Light
          </option>
        </select>
      </div>

      <div className="option" onChange={handleSelect}>
        <label htmlFor="language">Languages</label>
        <select name="language" id="language">
          <option value="javascript">
            JavaScript
          </option>
          <option value="python">
            Python
          </option>
          <option value="java">
            Java
          </option>
          <option value="cpp">
            C++
          </option>
        </select>
      </div>

      <div className="option">
        More
      </div>
    </div>
  );
}

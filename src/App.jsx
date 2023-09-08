import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainEditor from "./pages/MainEditor/MainEditor";
import Settings from "./pages/Settings/Settings";
import { CodeEditorProvider } from "./contexts/CodeEditorContext";

function App() {
  return (
    <CodeEditorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainEditor />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </CodeEditorProvider>
  );
}

export default App;

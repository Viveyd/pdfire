import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./reset.css";

function App() {
  return (
    <>
      <header>
        <h1>PDFier</h1>
      </header>
      <main>
        <button className="file-btn">
          <label htmlFor="file-selector" className="center-flex full-wh">
            Add files
            <input
              id="file-selector"
              className="hidden"
              type="file"
              accept="image/*"
              multiple
            />
          </label>
        </button>
      </main>
    </>
  );
}

export default App;

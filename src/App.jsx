import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./reset.css";

function App() {
  const [selection, updateSelection] = useState([]);

  function update(e) {
    const files = [...e.target.files];
    updateSelection(files);
  }

  return (
    <>
      <header>
        <h1>PDFier</h1>
      </header>
      <main>
        {selection.length ? (
          <FileList data={selection} />
        ) : (
          <button className="file-btn">
            <label htmlFor="file-selector" className="center-flex full-wh">
              Add files
              <input
                id="file-selector"
                className="hidden"
                type="file"
                accept="image/*"
                multiple
                onChange={update}
              />
            </label>
          </button>
        )}
      </main>
    </>
  );
}

function FileList({ data, sort = "default" }) {
  return (
    <ul>
      {data.map((item) => {
        return <li key={item.name}> {item.name} </li>;
      })}
    </ul>
  );
}

export default App;

import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./reset.css";
import "./print1.css";
import Icon from "@mdi/react";
import { mdiCheck, mdiFilePdfBox, mdiFileArrowUpDown } from "@mdi/js";

function App() {
  const [selection, updateSelection] = useState([]);

  function update(e) {
    const files = [...e.target.files];
    updateSelection(files);
  }

  return (
    <>
      <main className="bordered">
        <header className="padded-24">
          <h1>PDFier</h1>
          <button className="bare-btn hover-1">
            <Icon path={mdiFileArrowUpDown} size={1} />
          </button>
          <button className="bare-btn hover-1" onClick={window.print}>
            <Icon path={mdiFilePdfBox} size={1} />
          </button>
        </header>
        <main className="border-top padded-24">
          {selection.length ? (
            <FileList data={selection} />
          ) : (
            <button className="file-btn hover-1">
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
      </main>
      <section id="print-area" className="hidden"></section>
    </>
  );
}

function FileList({ data, sort = "default" }) {
  const [floor, setFloor] = useState(0);
  const maxRows = 8;
  const ceil = floor + maxRows < data.length ? floor + maxRows : data.length;

  return (
    <>
      <button onClick={() => setFloor(floor - maxRows)} disabled={floor <= 0}>
        prev
      </button>
      <button
        onClick={() => setFloor(floor + maxRows)}
        disabled={floor + maxRows >= data.length}
      >
        next
      </button>
      <table className="file-list">
        <thead>
          <tr>
            <th> # </th>
            <th> Filename</th>
            <th> Valid</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(floor, ceil).map((data, index) => (
            <tr key={index}>
              <td>{index + floor + 1}</td>
              <td>{data.name}</td>
              <td>
                <Icon path={mdiCheck} color="green" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;

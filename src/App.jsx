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
    <main className="bordered">
      <header className="padded-24">
        <h1>PDFier</h1>
        <button className="bare-btn">
          <Icon path={mdiFileArrowUpDown} size={1} />
        </button>
        <button className="bare-btn" onClick={window.print}>
          <Icon path={mdiFilePdfBox} size={1} />
        </button>
      </header>
      <main className="border-top padded-24">
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
      <section id="print-area" className="hidden"></section>
    </main>
  );
}

function FileList({ data, sort = "default", maxRows = 8 }) {
  const rowsToRender = maxRows < data.length ? maxRows : data.length;
  const rowsData = Array(rowsToRender)
    .fill()
    .map(() => []);
  let counter = 0;
  data.forEach((item, index) => {
    console.log(counter);
    rowsData[counter].push([index + 1, item.name]);
    counter = counter < rowsToRender - 1 ? counter + 1 : 0;
  });
  console.log(rowsData);

  return (
    <table className="file-list">
      <thead>
        <tr>
          <th> </th>
          <th> Filename</th>
          <th> Valid</th>
        </tr>
      </thead>
      <tbody>
        {rowsData.map((data, index) => (
          <tr key={index}>
            {data.map((item) => (
              <>
                <td key={index}> {item[0]}.) </td>
                <td> {item[1]} </td>
                <td>
                  {" "}
                  <Icon path={mdiCheck} size={1} />{" "}
                </td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;

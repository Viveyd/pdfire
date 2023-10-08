import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./reset.css";
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
      <header>
        <h1>PDFier</h1>
        <button className="bare-btn">
          <Icon path={mdiFileArrowUpDown} size={1} />
        </button>
        <button className="bare-btn">
          <Icon path={mdiFilePdfBox} size={1} />
        </button>
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

function FileList({ data, sort = "default", maxRows = 8 }) {
  const rowsToRender = maxRows < data.length ? maxRows : data.length;
  const rowsData = new Array(rowsToRender).fill([]);
  let counter = 0;
  data.forEach((item, index) => {
    console.count();
    rowsData[counter].push([index + 1, item.name]);
    counter = counter < rowsToRender ? counter + 1 : 0;
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

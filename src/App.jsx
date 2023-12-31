import { useState } from "react";
import "./App.css";
import "./reset.css";
import "./print1.css";
import Icon from "@mdi/react";
import { mdiFilePdfBox, mdiFileArrowUpDown, mdiPlusBox } from "@mdi/js";
import FileList from "./FileList";
import PrintArea from "./PrintArea";

function App() {
  const [selection, updateSelection] = useState([]);

  function update(e) {
    const files = [...e.target.files];
    updateSelection(files);
  }

  return (
    <>
      <main className="">
        <header className="">
          <h1>PDFire</h1>
          <button className="bare-btn hover-1">
            <Icon path={mdiFileArrowUpDown} size={1} />
          </button>
          <button className="bare-btn hover-1" onClick={window.print}>
            <Icon path={mdiFilePdfBox} size={1} />
          </button>
        </header>
        <main className="table-con border-top">
          <FileList data={selection} />
          {!selection.length && (
            <button className="file-btn bare-btn ">
              <label
                htmlFor="file-selector"
                className="flex-center full-wh hover-1"
              >
                <Icon path={mdiPlusBox} size={1} />
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
      <PrintArea className="letter" data={selection} />
    </>
  );
}

export default App;

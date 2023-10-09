import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCheckCircle, mdiArrowLeftThick, mdiArrowRightThick } from "@mdi/js";

export default function FileList({ data, sort = "default" }) {
  const [floor, setFloor] = useState(0);
  const maxRows = 8;
  const ceil = floor + maxRows < data.length ? floor + maxRows : data.length;

  return (
    <>
      <header>
        <span>
          Viewing selected files. {data.length}/{data.length} valid.
        </span>
        <div>
          <button
            className="bare-btn"
            onClick={() => setFloor(floor - maxRows)}
            disabled={floor <= 0}
          >
            <Icon path={mdiArrowLeftThick} size={1} />
          </button>
          <span> {floor / maxRows + 1} </span>
          <button
            className="bare-btn"
            onClick={() => setFloor(floor + maxRows)}
            disabled={floor + maxRows >= data.length}
          >
            <Icon path={mdiArrowRightThick} size={1} />
          </button>
        </div>
      </header>
      <table className="file-list">
        <colgroup>
          <col />
        </colgroup>
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
                <Icon path={mdiCheckCircle} color="green" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

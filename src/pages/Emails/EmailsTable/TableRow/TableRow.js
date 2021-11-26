import cs from "./TableRow.module.css";
import StatusTag from "../../../../components/StatusTag/StatusTag";

function TableRow({ subject, lastUpdated, openRate, ...other }) {
  return (


    <div className={cs["table-row"]}>
      <div className={`${cs["head-cell"]} ${cs["checkbox"]}`}>
        <input type="checkbox" />
      </div>
      <StatusTag {...other} />
      <div className={`${cs["head-cell"]} ${cs["subject"]}`}>{subject}</div>
      <div className={`${cs["head-cell"]} ${cs["last-updated"]}`}>{lastUpdated}</div>
      <div className={`${cs["head-cell"]} ${cs["open-rate"]}`}>{openRate}</div>
    </div>


  );
}

export default TableRow;
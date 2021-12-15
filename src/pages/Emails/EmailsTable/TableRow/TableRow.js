import cs from "./TableRow.module.css";
import TableCheckbox from "../../../../components/TableCheckbox/TableCheckbox";

function TableRow({ subject, lastUpdated, openRate, children }) {
  return (

    <div className={cs["table-row"]}>
      <div className={cs["checkbox"]}>
        <TableCheckbox />
      </div>
      <div className={`${cs["head-cell"]} ${cs["status"]}`}>{children}</div>
      <div className={`${cs["head-cell"]} ${cs["subject"]}`}>{subject}</div>
      <div className={`${cs["head-cell"]} ${cs["last-updated"]}`}>{lastUpdated}</div>
      <div className={`${cs["head-cell"]} ${cs["open-rate"]}`}>{openRate}</div>
    </div>

  );
}

export default TableRow;
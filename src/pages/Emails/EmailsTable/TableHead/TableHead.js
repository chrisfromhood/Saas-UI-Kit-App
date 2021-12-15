import cs from "./TableHead.module.css";
import TableCheckbox from "../../../../components/TableCheckbox/TableCheckbox";

function TableHead() {
  return (
    <div className={cs["table-head"]}>

      <div className={cs["checkbox"]}>
        <TableCheckbox />
      </div>
      <div className={`${cs["head-cell"]} ${cs["status"]}`}>Status</div>
      <div className={`${cs["head-cell"]} ${cs["subject"]}`}>Subject</div>
      <div className={`${cs["head-cell"]} ${cs["last-updated"]}`}>Last updated</div>
      <div className={`${cs["head-cell"]} ${cs["open-rate"]}`}>Open rate</div>

    </div>


  );
}

export default TableHead;
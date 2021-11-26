import cs from "./TableHead.module.css";

function TableHead() {
  return (
    <div className={cs["table-head"]}>

      <div className={cs["table-row"]}>
        <div className={`${cs["head-cell"]} ${cs["checkbox"]}`}>
          <input type="checkbox" />
        </div>
        <div className={`${cs["head-cell"]} ${cs["status"]}`}>Status</div>
        <div className={`${cs["head-cell"]} ${cs["subject"]}`}>Subject</div>
        <div className={`${cs["head-cell"]} ${cs["last-updated"]}`}>Last updated</div>
        <div className={`${cs["head-cell"]} ${cs["open-rate"]}`}>Open rate</div>
      </div> {/*!--- .table-row-0 ---  */}

    </div>


  );
}

export default TableHead;
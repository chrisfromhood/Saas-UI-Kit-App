import cs from "./TableChecked.module.css";
import editIcon from "../../assets/img/icons/edit-icon.svg";
import binIcon from "../../assets/img/icons/baseline-delete.svg";
import StatusCircle from "../ColorCircles/StatusCircle";

function TableChecked() {
  return (
    <div className={cs["table-topbar"]}>

      <div className={cs["table-row"]}>
        <div className={`${cs["head-cell"]} ${cs["checkbox"]}`}>
          <input type="checkbox" checked />
        </div>
        <div className={`${cs["head-cell"]} ${cs["status"]}`}>1 selected</div>
        <div className={cs["topbar-icons"]}>
          <div className={cs["circle-margin"]}>
            <StatusCircle red w12 />
          </div>
          <img src={editIcon} alt="Edit Icon" className={cs["topbar_icon"]} />
          <img src={binIcon} alt="Bin Icon" className={cs["topbar_icon"]} />
        </div>

      </div> {/*!--- .table-row-0 ---  */}

    </div>


  );
}

export default TableChecked;
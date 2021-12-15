import cs from "./TasksTableCheckedRow.module.css";
import editIcon from "../../../assets/img/icons/edit-icon.svg";
import binIcon from "../../../assets/img/icons/baseline-delete.svg";
import TableCheckbox from "../../../components/TableCheckbox/TableCheckbox";
import StatusCircle from "../../../components/StatusCircles/StatusCircle";

function TasksTableCheckedRow() {
  return (
    <div className={cs["table-topbar"]}>

      <div className={cs["table-row"]}>
        <div className={cs["checkbox-cell"]}>
          <TableCheckbox selected>2</TableCheckbox>
        </div>
        <div className={cs["status"]}>2 selected</div>
        <div className={cs["topbar-icons"]}>
          <div className={cs["circle-margin"]}>
            <StatusCircle yellow w12 />
            <StatusCircle green w12 />
            <StatusCircle red w12 />
          </div>
          <img src={editIcon} alt="Edit Icon" className={cs["topbar_icon"]} />
          <img src={binIcon} alt="Bin Icon" className={cs["topbar_icon"]} />
        </div>

      </div> {/*!--- .table-row-0 ---  */}

    </div>


  );
}

export default TasksTableCheckedRow;
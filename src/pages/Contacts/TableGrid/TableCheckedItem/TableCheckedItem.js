import cs from "./TableCheckedItem.module.css";
import binIcon from "../../../../assets/img/icons/baseline-delete.svg";

function TableCheckedItem() {
  return (
    <div className={cs["table-topbar"]}>

      <div className={cs["table-row"]}>
        <div className={cs["checkbox"]}>
          <input type="checkbox" checked />
        </div>
        <div className={cs["selected"]}>1 selected</div>
        <div className={cs["topbar-icons"]}>
          <img src={binIcon} alt="Bin Icon" className={cs["topbar_icon"]} />
        </div>

      </div> {/*!--- .table-row-0 ---  */}

    </div>


  );
}

export default TableCheckedItem;
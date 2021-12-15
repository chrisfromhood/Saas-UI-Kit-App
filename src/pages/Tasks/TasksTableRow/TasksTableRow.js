import cs from "./TasksTableRow.module.css";
import StatusTag from "../../../components/StatusTag/StatusTag";

import TableCheckbox from "../../../components/TableCheckbox/TableCheckbox";



function TasksTableRow({ children, title, type, userLogo, userName, date }) {
  return (

    <div className={cs["table-row"]}>
      <div className={`${cs["row-cell"]} ${cs["th-1"]}`}>
        <TableCheckbox />
      </div>
      <div className={`${cs["row-cell"]} ${cs["th-2"]}`}>
        {children}
      </div>
      <div className={`${cs["row-cell"]} ${cs["th-3"]}`}>{title}</div>
      <div className={`${cs["row-cell"]} ${cs["th-4"]}`}>{type}</div>
      <div className={`${cs["row-cell"]} ${cs["th-5"]}`}>
        <div className={cs["user_logo_wrapper"]}>
          <img src={userLogo} alt="User Logo" className={cs["user_logo"]} />
          <div className={cs["user-name"]}>{userName}</div>
        </div>

      </div>

      <div className={`${cs["row-cell"]} ${cs["th-6"]}`}>{date}</div>
    </div>

  );
}
export default TasksTableRow;
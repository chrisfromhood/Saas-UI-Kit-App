import cs from "./TableRow.module.css";

function TableRow({ userLogo, userName, type, title, dueDate }) {
  return (

    <div className={cs["table-row"]}>
      <div className={`${cs["row-cell"]} ${cs["th-1"]}`}></div>
      <div className={`${cs["row-cell"]} ${cs["th-2"]}`}>
        <div className={cs["user_logo_wrapper"]}>
          <img src={userLogo} alt="User Logo" className={cs["user_logo"]} />
        </div>
        <div className={cs["user-name"]}>{userName}</div>
      </div>
      <div className={`${cs["row-cell"]} ${cs["th-3"]}`}>{email}</div>
      <div className={`${cs["row-cell"]} ${cs["th-4"]}`}>{company}</div>
      <div className={`${cs["row-cell"]} ${cs["th-5"]}`}>{role}</div>
      <div className={`${cs["row-cell"]} ${cs["th-6"]}`}>{forecast}</div>
      <div className={`${cs["row-cell"]} ${cs["th-7"]}`}>{activity}</div>
    </div>

  );
}
export default TableRow;
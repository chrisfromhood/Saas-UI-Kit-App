import cs from "./RecentActivityField.module.css";

function RecentActivityField({ icon, taskBlack, taskBlue, timeDate }) {
  return (

    <div className={cs["text-field_wrapper"]}>
      <div className={cs["icon_wrapper"]}>
        <img className={cs["circle-icon"]} src={icon} alt="Circle icon" />
      </div>
      <div className={cs["text_wrapper"]}>
        <h3>{taskBlack} <span className={cs["task-details"]}>{taskBlue}</span></h3>
        <span className={cs["time-date"]}>{timeDate}</span>
      </div>
    </div>

  );
}
export default RecentActivityField;
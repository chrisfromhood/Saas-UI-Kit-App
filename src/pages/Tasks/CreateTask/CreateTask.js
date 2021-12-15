import cs from "./CreateTask.module.css";
import Button from "../../../components/Button/Button";
import closeIcon from "../../../assets/img/icons/close.svg";
import arrowDown from "../../../assets/img/icons/arrow-down-gray.svg";
import lindsey from "../../../assets/img/users/lindseyStroud.jpg";
import StatusTag from "../../../components/StatusTag/StatusTag"
import TextfieldIcon from "../../../components/TextfieldIcon/TextfieldIcon";
import AssociatedWith from "../../../components/AssociatedWith/AssociatedWith";

function CreateTask() {
  return (
    <div className={cs["create-task_container"]}>

      <div className={cs["create-task_box"]}>

        <div className={cs["box-heading"]}>
          <h1>Create Task</h1>
          <img src={closeIcon} alt="Close Icon" className={cs["close_icon"]} />
        </div>

        <div className={cs["box-status_wrapper"]}>
          <StatusTag yellow>Active</StatusTag>
          <StatusTag green>Completed</StatusTag>
          <StatusTag red>Ended</StatusTag>
        </div>

        <div className={cs["box-forms_wrapper"]}>

          <TextfieldIcon
            title="Title"
            option="Office meet-up"
          >
          </TextfieldIcon>

          <TextfieldIcon
            title="Type"
            option="Reminder"
          >
            <img src={arrowDown} alt="Arrow Down" className={cs["arrow_down"]} />
          </TextfieldIcon>

          <AssociatedWith
            title="Associated with"
            userLogo={lindsey}
            userName="Lindsey Stroud"
          >
            <img src={arrowDown} alt="Arrow Down" className={cs["arrow_down"]} />
          </AssociatedWith>

          <TextfieldIcon
            title="Due date"
            option="Tomorrow"
          >
            <img src={arrowDown} alt="Arrow Down" className={cs["arrow_down"]} />
          </TextfieldIcon>

        </div>

        <div className={cs["btn-wrapper_save"]}>
          <Button className={`${cs["btn-default"]}`}>Create task</Button>
        </div>

      </div>

    </div>

  );
}

export default CreateTask;
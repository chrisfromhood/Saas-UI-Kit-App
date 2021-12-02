import cs from "./CreateTask.module.css";
import Button from "../../../components/Button/Button";
import closeIcon from "../../../assets/img/icons/close.svg";
import arrowDown from "../../../assets/img/icons/arrow-down-gray.svg";
import lindsey from "../../../assets/img/users/lindseyStroud.jpg";


function CreateTask() {
  return (
    <div className={cs["create-task_container"]}>

      <div className={cs["create-task_box"]}>
        <div className={cs["box-heading"]}>
          <h1>Create Task</h1>
          <img src={closeIcon} alt="Close Icon" className={cs["close_icon"]} />
        </div>
        <div className={cs["box-status_wrapper"]}>
          <div className={`${cs["tag"]} ${cs["yellow"]}`}>Active</div>
          <div className={`${cs["tag"]} ${cs["green"]}`}>Completed</div>
          <div className={`${cs["tag"]} ${cs["red"]}`}>Ended</div>
        </div>

        <div className={cs["box-forms_wrapper"]}>
          <div className={cs["box-form_field"]}>
            <label>Title</label>
            <span>Office meet-up</span>
          </div>
          <div className={cs["box-form_field"]}>
            <label>Type</label>
            <div className={cs["text-field_wrapper"]}>
              <span>Reminder</span>
              <img src={arrowDown} alt="Arrow Down" className={cs["arrow_down"]} />
            </div>
          </div>
          <div className={cs["box-form_field"]}>
            <label>Associated with</label>
            <div className={cs["text-field_wrapper"]}>
              <div className={cs["user_wrapper"]}>
                <img src={lindsey} alt="User avatar" className={cs["user_avatar"]} />
                <span>Reminder</span>
              </div>
              <img src={arrowDown} alt="Arrow Down" className={cs["arrow_down"]} />
            </div>
          </div>
          <div className={cs["box-form_field"]}>
            <label>Due date</label>
            <div className={cs["text-field_wrapper"]}>
              <span>Tomorrow</span>
              <img src={arrowDown} alt="Arrow Down" className={cs["arrow_down"]} />
            </div>
          </div>


        </div>

        <div className={cs["btn-wrapper_save"]}>
          <Button className={`${cs["btn-default"]}`}>Create task</Button>
        </div>

      </div>

    </div>




  );
}

export default CreateTask;
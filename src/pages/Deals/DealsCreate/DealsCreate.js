import cs from "./DealsCreate.module.css";
import Button from "../../../components/Button/Button";
import closeIcon from "../../../assets/img/icons/close.svg";
import arrowDown from "../../../assets/img/icons/arrow-down-gray.svg";
import schedule from "../../../assets/img/contact/schedule.svg";
import lindsey from "../../../assets/img/users/lindseyStroud.jpg";


function DealsCreate() {
  return (
    <div className={cs["create-task_container"]}>

      <div className={cs["create-task_box"]}>
        <div className={cs["box-heading"]}>
          <h1>Create deal</h1>
          <img src={closeIcon} alt="Close Icon" className={cs["close_icon"]} />
        </div>
        <div className={cs["box-status_wrapper"]}>
          <div className={`${cs["tag"]} ${cs["yellow"]}`}>Low</div>
          <div className={`${cs["tag"]} ${cs["green"]}`}>High</div>
          <div className={`${cs["tag"]} ${cs["red"]}`}>Urgent</div>
        </div>

        <div className={cs["box-forms_wrapper"]}>
          <div className={cs["box-form_field"]}>
            <label>Subject</label>
            <span>Microsoft</span>
          </div>
          <div className={cs["box-form_field"]}>
            <label>Close date</label>
            <div className={cs["text-field_wrapper"]}>
              <span>December 22, 2018</span>
              <img src={schedule} alt="Calendar" className={cs["schedule"]} />
            </div>
          </div>
          <div className={cs["box-form_field"]}>
            <label>Associated with</label>
            <div className={cs["text-field_wrapper"]}>
              <div className={cs["user_wrapper"]}>
                <img src={lindsey} alt="User avatar" className={cs["user_avatar"]} />
                <span>Lindsey Stroud</span>
              </div>
              <img src={arrowDown} alt="Arrow Down" className={cs["arrow_down"]} />
            </div>
          </div>
          <div className={cs["box-form_field"]}>
            <label>Amount</label>
            <span className={cs["dolar"]}>$ 150</span>
          </div>


        </div>

        <div className={cs["btn-wrapper_save"]}>
          <Button className={`${cs["btn-default"]}`}>Add new</Button>
        </div>

      </div>

    </div>




  );
}

export default DealsCreate;
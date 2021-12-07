import cs from "./ContactsTab.module.css";
import note from "../../../../assets/img/contact/note.svg";
import email from "../../../../assets/img/contact/email.svg";
import call from "../../../../assets/img/contact/call.svg";
import newActivity from "../../../../assets/img/contact/new-activity.svg";
import task from "../../../../assets/img/contact/create-task.svg";
import schedule from "../../../../assets/img/contact/schedule.svg";
function ContactsTab() {
  return (

    <div className={cs["contacts-tab_wrapper"]}>
      <div className={cs["header-row"]}>
        <div className={`${cs["header-row_item"]} ${cs["bottom-border_blue"]}`}>
          <img className={cs["icon"]} src={note} alt="Note icon" />
          <span className={`${cs["text"]} ${cs["text_blue"]}`}>New note</span>
        </div>
        <div className={`${cs["header-row_item"]} ${cs["bottom-border_grey"]}`}>
          <img className={`${cs["icon"]} ${cs["grey"]}`} src={email} alt="Note icon" />
          <span className={cs["text"]}>Email</span>
        </div>
        <div className={`${cs["header-row_item"]} ${cs["bottom-border_grey"]}`}>
          <img className={`${cs["icon"]} ${cs["grey"]}`} src={call} alt="Note icon" />
          <span className={cs["text"]}>Call</span>
        </div>
        <div className={`${cs["header-row_item"]} ${cs["bottom-border_grey"]}`}>
          <img className={`${cs["icon"]} ${cs["grey"]}`} src={newActivity} alt="Note icon" />
          <span className={cs["text"]}>New activity</span>
        </div>
        <div className={`${cs["header-row_item"]} ${cs["bottom-border_grey"]}`}>
          <img className={`${cs["icon"]} ${cs["grey"]}`} src={task} alt="Note icon" />
          <span className={cs["text"]}>Create task</span>
        </div>
        <div className={`${cs["header-row_item"]} ${cs["bottom-border_grey"]}`}>
          <img className={`${cs["icon"]} ${cs["grey"]}`} src={schedule} alt="Note icon" />
          <span className={cs["text"]}>Schedule</span>
        </div>
      </div>
      <div className={cs["fill-text_wrapper"]}>
        <p className={cs["fill-text"]}>Leave a note here..</p>
      </div>
    </div>
  );
}
export default ContactsTab;
import cs from "./ContactBoxCreate.module.css";
import user from "../../../../assets/img/users/blank.jpg";
import done from "../../../../assets/img/icons/done.svg";

function ContactBoxCreate() {
  return (

    <div className={cs["contact-box"]}>
      <div className={cs["contact-box-up"]}>

        <div className={cs["avatar-logo_wrapper"]}>
          <img className={cs["avatar-photo"]} src={user} alt="User avatar profile picture" />
          <img className={cs["edit-icon"]} src={done} alt="Edit user icon" />
        </div>

        <div>
          <h3 className={cs["user-name"]}>Creating new contact</h3>
        </div>

        <div className={cs["tag_wrapper"]}>
          <div className={`${cs["tag"]} ${cs["green"]}`}>New</div>
        </div>

      </div>

      <div className={cs["contact-box-down"]}>

        <div className={cs["text-field-edit"]}>
          <span className={cs["field-name"]}>First name</span>
          <div className={cs["user-value_wrapper"]}>
            <input className={cs["user-value"]} type="text" placeholder="Jane"></input>
          </div>
        </div>


        <div className={cs["text-field-edit"]}>
          <span className={cs["field-name"]}>Last name</span>
          <div className={cs["user-value_wrapper"]}>
            <input className={cs["user-value"]} type="text" placeholder="Doe"></input>
          </div>
        </div>

        <div className={cs["text-field-edit"]}>
          <span className={cs["field-name"]}>Email</span>
          <div className={cs["user-value_wrapper"]}>
            <input className={cs["user-value"]} type="text" placeholder="jane.doe@gmail.com"></input>
          </div>
        </div>

        <div className={cs["text-field-edit"]}>
          <span className={cs["field-name"]}>Company</span>
          <div className={cs["user-value_wrapper"]}>
            <input className={cs["user-value"]} type="text" placeholder="Trello"></input>
          </div>
        </div>

        <div className={cs["text-field-edit"]}>
          <span className={cs["field-name"]}>Role</span>
          <div className={cs["user-value_wrapper"]}>
            <input className={cs["user-value"]} type="text" placeholder="Engineer"></input>
          </div>
        </div>

        <div className={cs["text-field-edit"]}>
          <span className={cs["field-name"]}>Website</span>
          <div className={cs["user-value_wrapper"]}>
            <input className={cs["user-value"]} type="text" placeholder="janedoe.com"></input>
          </div>
        </div>

        <div className={cs["text-field-edit"]}>
          <span className={cs["field-name"]}>Twitter</span>
          <div className={cs["user-value_wrapper"]}>
            <input className={cs["user-value"]} type="text" placeholder="@jane.doe"></input>
          </div>
        </div>

        <div className={cs["text-field-edit"]}>
          <span className={cs["field-name"]}>Facebook</span>
          <div className={cs["user-value_wrapper"]}>
            <input className={cs["user-value"]} type="text" placeholder="/jane.doe"></input>
          </div>
        </div>


      </div>



    </div>
  );
}
export default ContactBoxCreate;
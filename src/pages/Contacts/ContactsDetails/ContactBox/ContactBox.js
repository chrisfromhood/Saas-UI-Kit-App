import cs from "./ContactBox.module.css";
import TextField from "../../../../components/TextField/TextField";
import user from "../../../../assets/img/users/JaneBig.jpg";
import edit from "../../../../assets/img/icons/edit.svg";
import web from "../../../../assets/img/socials-icons/website.svg";
import tw from "../../../../assets/img/socials-icons/twitter.svg";
import fb from "../../../../assets/img/socials-icons/facebook.svg";


function ContactBox() {
  return (

    <div className={cs["contact-box"]}>
      <div className={cs["contact-box-up"]}>

        <div className={cs["avatar-logo_wrapper"]}>
          <img className={cs["avatar-photo"]} src={user} alt="User avatar profile picture" />
          <img className={cs["edit-icon"]} src={edit} alt="Edit user icon" />
        </div>

        <div>
          <h3 className={cs["user-name"]}>Jane Doe</h3>
        </div>

        <div>
          <p className={cs["user-role"]}>Engineer at Trello</p>
        </div>

        <div className={cs["tag_wrapper"]}>
          <div className={`${cs["tag"]} ${cs["green"]}`}>New</div>
        </div>

        <div className={cs["socials_wrapper"]}>
          <img className={cs["social-icon"]} src={web} alt="Social icon" />
          <img className={cs["social-icon"]} src={tw} alt="Social icon" />
          <img className={cs["social-icon"]} src={fb} alt="Social icon" />
        </div>

      </div>

      <div className={cs["contact-box-down"]}>
        <div className={cs["contact-field-wrapper"]}>
          <TextField
            fieldName="First name"
            userValue="Jane"
          />
        </div>
        <div className={cs["contact-field-wrapper"]}>
          <TextField
            fieldName="Last name"
            userValue="Doe"
          />
        </div>
        <div className={cs["contact-field-wrapper"]}>
          <TextField
            fieldName="Email"
            userValue="jane.doe@gmail.com"
          />
        </div>
        <div className={cs["contact-field-wrapper"]}>
          <TextField
            fieldName="Company"
            userValue="Trello"
          />
        </div>
        <div className={cs["contact-field-wrapper"]}>
          <TextField
            fieldName="Role"
            userValue="Engineer"
          />
        </div>
        <div className={cs["contact-field-wrapper"]}>
          <TextField
            fieldName="Website"
            userValue="janedoe.com"
          />
        </div>
        <div className={cs["contact-field-wrapper"]}>
          <TextField
            fieldName="Twitter"
            userValue="@jane.doe"
          />
        </div>
        <div className={cs["contact-field-wrapper"]}>
          <TextField
            fieldName="Facebook"
            userValue="/jane.doe"
          />
        </div>


      </div>
    </div>
  );
}
export default ContactBox;
import cs from "./EmailAddressRow.module.css";
import edit from "../../../../assets/img/icons/edit-icon.svg"
import bin from "../../../../assets/img/icons/baseline-delete.svg"


function EmailAddressRow({ email }) {
  return (

    <div className={cs["email-address_row"]}>
      <div className={cs["email-address_wrapper"]}>
        <span className={cs["email-address"]}>{email}</span>
      </div>
      <div className={cs["row-icons_wrapper"]}>
        <img src={edit} alt="Edit Icon" className={cs["edit_icon"]} />
        <img src={bin} alt="Remove Icon" className={cs["bin_icon"]} />
      </div>
    </div>

  );
}
export default EmailAddressRow;
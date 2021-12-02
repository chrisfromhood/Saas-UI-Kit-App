import cs from "./EmailViewHeader.module.css";
import Button from "../../../../components/Button/Button";
import arrowBack from "../../../../assets/img/icons/back.svg";


function EmailViewHeader() {
  return (

    <div className={cs["email-view_header"]}>
      <div className={cs["back_wrapper"]}>
        <img src={arrowBack} alt="Arrow Back" className={cs["arrow_back"]} />
        <span>Back to mails</span>
      </div>
      <div className={cs["btn-wrapper"]}>
        <Button className={`${cs["btn-default"]}`}>Send again</Button>
      </div>

    </div>


  );
}
export default EmailViewHeader;
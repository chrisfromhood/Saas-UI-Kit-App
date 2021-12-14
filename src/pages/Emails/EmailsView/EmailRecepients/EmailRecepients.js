import cs from "./EmailRecepients.module.css";
import SearchbarInput from "../../../../components/SearchbarInput/SearchbarInput";
import EmailAddressRow from "../EmailAddressRow/EmailAddressRow";

function EmailRecepients() {
  return (

    <div className={cs["email-recepients"]}>
      <div className={cs["email-recepients_header"]}>
        <h3>Recepients</h3>
        <SearchbarInput title="Search recepient" />
      </div>
      <div className={cs["email-recepients_content"]}>
        <EmailAddressRow email="mikescolaro@gmail.com" />
        <EmailAddressRow email="alexcooper@gmail.com" />
        <EmailAddressRow email="george2018@gmail.com" />
        <EmailAddressRow email="rebecca.moore888@gmail.com" />
        <EmailAddressRow email="nicci.troiani@gmail.com" />
        <EmailAddressRow email="lindsey.stround@gmail.com" />
        <EmailAddressRow email="jane.doe@gmail.com" />
        <EmailAddressRow email="dermot.jones@gmail.com" />
        <EmailAddressRow email="martin.merces@gmail.com" />
        <EmailAddressRow email="john.smith@gmail.com" />
        <EmailAddressRow email="judith.williams@gmail.com" />

      </div>

    </div>


  );
}
export default EmailRecepients;
import cs from "./ContactsCreate.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import ContactsTab from "../ContactsDetails/ContactsTab/ContactsTab";
import ContactBoxCreate from "./ContactBoxCreate/ContactBoxCreate";

import arrowBack from "../../../assets/img/icons/back.svg";
import SortFeature from "../../../components/SortFeature/SortFeature"
import nohistory from "../../../assets/img/contact/nohistory.svg";


function ContactsCreate() {
  return (
    <AppPage>
      <div className={cs["container"]}>

        <div className={cs["left"]}>
          <div className={cs["back_wrapper"]}>
            <img src={arrowBack} alt="Arrow Back" className={cs["arrow_back"]} />
            <span>Back to contacts</span>
          </div>
          <ContactBoxCreate />
        </div>
        <div className={cs["right"]}>
          <ContactsTab />
          <div className={cs["sort-feature_wrapper"]}>
            <SortFeature
              title="Filter"
            />
          </div>
          <div className={cs["contacts-recent-activity"]}>
            <div className={cs["image-wrapper"]}>
              <img className={cs["no-history"]} src={nohistory} alt="No history yet" />
            </div>
            <h2>No history yet</h2>
          </div>
        </div>
      </div>
    </AppPage>

  );
}
export default ContactsCreate;
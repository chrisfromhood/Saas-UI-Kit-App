import cs from "./ContactsCreate.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import ContactsTab from "./ContactsTab/ContactsTab";


import arrowBack from "../../../assets/img/icons/back.svg";
import SortFeature from "../../../components/SortFeature/SortFeature"


function ContactsCreate() {
  return (
    <AppPage>
      <div className={cs["container"]}>

        <div className={cs["left"]}>
          <div className={cs["back_wrapper"]}>
            <img src={arrowBack} alt="Arrow Back" className={cs["arrow_back"]} />
            <span>Back to contacts</span>
          </div>
          <ContactsBox />
        </div>
        <div className={cs["right"]}>
          <ContactsTab />
          <div className={cs["sort-feature_wrapper"]}>
            <SortFeature
              title="Filter"
            />
          </div>

          <ContactsRecentActivity />
        </div>
      </div>
    </AppPage>

  );
}
export default ContactsCreate;
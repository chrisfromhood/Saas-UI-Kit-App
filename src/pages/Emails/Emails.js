import cs from "./Emails.module.css";
import AppPage from "../../components/AppPage/AppPage";
import Button from "../../components/Button/Button";
import SortFeature from "../../components/SortFeature/SortFeature";
import EmailsFeature from "./EmailsFeature/EmailsFeature";
import EmailsTable from "./EmailsTable/EmailsTable";

import importIcon from "../../assets/img/icons/icon_import.svg";
import columnsIcon from "../../assets/img/icons/icon_columns.svg";


function Emails() {
  return (
    <AppPage>
      <div className={cs["content"]}>

        <div>
          <SortFeature title='Email type' />
          <SortFeature title='Campaign' />
        </div>


        <div className={cs["btn-wrapper_save"]}>
          <div className={cs["email-feature_wrapper"]}>
            <EmailsFeature
              feature='Import'
              icon={importIcon}
            />
            <EmailsFeature
              feature='Switch columns'
              icon={columnsIcon}
            />
          </div>
          <Button className={`${cs["btn-default"]}`}>Create mail</Button>
        </div>



        <EmailsTable />

      </div>

    </AppPage>
  );
}
export default Emails;
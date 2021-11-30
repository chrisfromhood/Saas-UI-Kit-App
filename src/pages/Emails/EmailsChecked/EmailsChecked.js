import cs from "./EmailsChecked.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import TasksHeader from "../../Tasks/TasksHeader/TasksHeader";
import Button from "../../../components/Button/Button";
import SortFeature from "../../Emails/EmailsFeature/EmailsFeature";
import EmailsFeature from "../../Emails/EmailsFeature/EmailsFeature";
import Emails from "../Emails";
import importIcon from "../../../assets/img/icons/icon_import.svg";
import columnsIcon from "../../../assets/img/icons/icon_columns.svg";


function EmailsChecked() {
  return (
    <AppPage>
      <div className={cs["content"]}>
        <TasksHeader>
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

        </TasksHeader>


      </div>

    </AppPage>
  );
}
export default EmailsChecked;
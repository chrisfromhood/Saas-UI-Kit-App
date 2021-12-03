import cs from "./EmailCreate.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import EmailsViewHeader from "../EmailsView/EmailViewHeader/EmailViewHeader";
import EmailCreateContent from "./EmailCreateContent/EmailCreateContent";
import EmailCreateComponents from "./EmailCreateComponents/EmailCreateComponents";


function EmailCreate() {
  return (
    <AppPage>
      <div className={cs["container"]}>
        <EmailsViewHeader />
        <div className={cs["box"]}>
          <EmailCreateContent />
          <EmailCreateComponents></EmailCreateComponents>
        </div>
      </div>
    </AppPage>

  );
}
export default EmailCreate;
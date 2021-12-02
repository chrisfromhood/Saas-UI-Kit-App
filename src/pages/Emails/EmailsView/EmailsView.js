import cs from "./EmailsView.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import EmailsViewHeader from "../EmailsView/EmailViewHeader/EmailViewHeader";
import EmailRecepients from "./EmailRecepients/EmailRecepients";
import EmailsViewContent from "./EmailsViewContent/EmailsViewContent";



function EmailsView() {
  return (
    <AppPage>
      <div className={cs["container"]}>
        <EmailsViewHeader />
        <div className={cs["box"]}>
          <EmailsViewContent></EmailsViewContent>
          <EmailRecepients></EmailRecepients>
        </div>
      </div>
    </AppPage>

  );
}
export default EmailsView;
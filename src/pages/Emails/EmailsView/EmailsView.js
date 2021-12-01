import cs from "./EmailsView.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import EmailsViewHeader from "../EmailsView/EmailViewHeader/EmailViewHeader";
import StatusTag from "../../../components/StatusTag/StatusTag";
import arrowUp from "../../../assets/img/icons/arrow_up.svg";



function EmailsView() {
  return (
    <AppPage>
      <div className={cs["content"]}>

        <EmailsViewHeader />

        <div className={cs["email-view_content"]}>
          <div className={cs["content-header"]}>
            <div className={cs["content_left"]}>
              <div className={cs["tag_wrapper"]}>
                <StatusTag sent />
              </div>

              <div className={cs["email-headline"]}>
                <h2>Internal email</h2>
                <img src={arrowUp} alt="Arrow Up" className={cs["arrow_up"]} />
              </div>
              <div className={cs["email-stats_wrapper"]}>
                <div className={cs["email-stats"]}>
                  <span>Recepients:</span>
                  <span>150</span>
                </div>
                <div className={cs["email-stats"]}>
                  <span>Opens:</span>
                  <span>124</span>
                </div>
                <div className={cs["email-stats"]}>
                  <span>Link clicks:</span>
                  <span>96</span>
                </div>
              </div>


            </div>
            <div className={cs["content_right"]}>


            </div>
          </div>
        </div>

      </div>
    </AppPage>

  );
}
export default EmailsView;
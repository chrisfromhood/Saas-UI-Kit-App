import cs from "./EmailsView.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import EmailsViewHeader from "../EmailsView/EmailViewHeader/EmailViewHeader";
import StatusTag from "../../../components/StatusTag/StatusTag";
import arrowUp from "../../../assets/img/icons/arrow_up.svg";
import bin from "../../../assets/img/icons/baseline-delete.svg";
import coverImage from "../../../assets/img/big/internal_email.jpg";
import EmailRecepients from "./EmailRecepients/EmailRecepients";



function EmailsView() {
  return (
    <AppPage>
      <div className={cs["content"]}>

        <EmailsViewHeader />

        <div className={cs["email-view_section"]}>
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
              <div className={cs["email-icons_wrapper"]}>
                <div className={cs["red_circle"]}></div>
                <img src={bin} alt="Recycle Bin" className={cs["bin"]} />
              </div>
              <span>8:20 am, Aug 1, 2018</span>

            </div>
          </div>
          <div className={cs["email-view_content"]}>

            <img src={coverImage} alt="Cover Image" className={cs["cover"]} />

            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nibh dui, at maximus odio rhoncus at. Mauris at velit eu turpis sollicitudin congue a ac quam. Mauris facilisis pulvinar lectus, maximus placerat leo elementum ut. Etiam a diam volutpat turpis luctus vulputate ut eu felis. Vestibulum dictum, purus eu auctor pretium, elit elit porta lorem, in convallis tortor erat in leo. Aliquam ac consectetur urna, eget pharetra neque. Morbi dictum faucibus eleifend. Cras a risus sagittis, accumsan justo et, faucibus tellus. Cras ullamcorper mauris in lorem vulputate tempor. Nullam cursus, nunc a scelerisque mattis, tortor magna efficitur nunc, ac consectetur mi risus a massa. Vestibulum turpis ipsum, maximus eget viverra sed, facilisis at eros. In dignissim rutrum lobortis. Duis lectus tellus, porttitor ac pharetra varius, sollicitudin vitae ante. Mauris faucibus consectetur nibh, vel euismod felis sodales vitae.</p>


          </div >

        </div>
        <EmailRecepients></EmailRecepients>
      </div>
    </AppPage>

  );
}
export default EmailsView;
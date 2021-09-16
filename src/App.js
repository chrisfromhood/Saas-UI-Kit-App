import cs from "./App.module.css";
import userPhoto from "./assets/img/user-icon.jpg";
import dashboardIcon from "./assets/img/icons/dashboardicon.svg";
import tasksIcon from "./assets/img/icons/tasks-activeicon.svg";
import emailIcon from "./assets/img/icons/emailicon.svg";
import contactsIcon from "./assets/img/icons/contactsicon.svg";
import chatIcon from "./assets/img/icons/chaticon.svg";
import dealsIcon from "./assets/img/icons/dealsicon.svg";
// className={cs[""]}
function App() {
  return (
    <div className={cs["container"]}>
      <div className={cs["searchbar"]}>SEARCHBAR</div>

      <div className={cs["sidebar"]}>
        <div className={cs["side-logo"]}>
          <span>SaaS Kit</span>
        </div>

        <div className={cs["user-details"]}>
          <div className={cs["user-details-photo_wrapper"]}>
            <img src={userPhoto} alt="User photo" className={cs["user-details_photo"]} />
          </div>
          <div className={cs["user-details_text"]}>
            <p className={cs["user-details_name"]}>Sierra Ferguson</p>
            <p className={cs["user-details_mail"]}>s.ferguson@gmail.com</p>
          </div>
        </div>
        <nav className={cs["side-options"]}>
          <div className={cs["side-option_item"]}>
            <img src={dashboardIcon} alt="File Upload Icon" className={cs["option_item_icon"]} />
            <span>Dashboard</span>
          </div>

          <div className={cs["side-option_item"]}>
            <img src={tasksIcon} alt="File Upload Icon" />
            <span>Tasks</span>
          </div>

          <div className={cs["side-option_item"]}>
            <img src={emailIcon} alt="File Upload Icon" />
            <span>Email</span>
          </div>

          <div className={cs["side-option_item"]}>
            <img src={contactsIcon} alt="File Upload Icon" />
            <span>Contacts</span>
          </div>

          <div className={cs["side-option_item"]}>
            <img src={chatIcon} alt="File Upload Icon" />
            <span>Chat</span>
          </div>

          <div className={cs["side-option_item"]}>
            <img src={dealsIcon} alt="File Upload Icon" />
            <span>Deals</span>
          </div>
        </nav>
      </div>
      <div className={cs["content"]}>CONTENT</div>
    </div>
  );
}

export default App;

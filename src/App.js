import cs from "./App.module.css";
import userPhoto from "./assets/img/user-icon.jpg";
import dashboardIcon from "./assets/img/icons/dashboardicon.svg";
import tasksIcon from "./assets/img/icons/tasks.svg";
import emailIcon from "./assets/img/icons/emailicon.svg";
import contactsIcon from "./assets/img/icons/contactsicon.svg";
import chatIcon from "./assets/img/icons/chaticon.svg";
import dealsIcon from "./assets/img/icons/dealsicon.svg";
import settingsIcon from "./assets/img/icons/settingsicon.svg";
import toggleIcon from "./assets/img/icons/toggle.svg";
// SEARCH
import searchIcon from "./assets/img/icons/search.svg";
import notifyIcon from "./assets/img/icons/notifications.svg";
// STATUS ICON
import activeIcon from "./assets/img/circle/active_circle.svg";
import completedIcon from "./assets/img/circle/completed_circle.svg";
import endedIcon from "./assets/img/circle/ended_circle.svg";
// HEADER
import arrowIcon from "./assets/img/icons/arrow.svg";
// User Pictures
import lindseyStroud from "./assets//img/lindseyStroud.jpg";
import nicciTraioni from "./assets//img/nicciTraioni.jpg";

// className={cs[""]}
//className={`${cs["prva-klasa"]} ${cs["druga-klasa"]}`}
function App() {
  return (
    <div className={cs["container"]}>
      <div className={cs["searchbar"]}>
        <form action="#" className={cs["search"]}>
          <button className={cs["search__button"]}>
            <img src={searchIcon} alt="Search Icon" />
          </button>
          <input type="text" className={cs["search__input"]} placeholder="Search tasks" />
        </form>
        <div className={cs["notify__icon"]}>
          <img src={notifyIcon} alt="Notify Icon" />
        </div>
      </div>

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
            <img src={dashboardIcon} alt="Dashboard Icon" className={cs["option_item_icon"]} />
            <span>Dashboard</span>
          </div>

          <div className={`${cs["side-option_item"]} ${cs["side-option_selected"]}`}>
            <img src={tasksIcon} alt="Tasks Icon" />
            <span>Tasks</span>
          </div>

          <div className={cs["side-status"]}>
            <div className={cs["side-status_item"]}>
              <img src={activeIcon} alt="Active Status Icon" />
              <span>Active</span>
            </div>
            <div className={cs["side-status_item"]}>
              <img src={completedIcon} alt="Completed Status Icon" />
              <span>Completed</span>
            </div>
            <div className={cs["side-status_item"]}>
              <img src={endedIcon} alt="Ended Status Icon" />
              <span>Ended</span>
            </div>
          </div>

          <div className={cs["side-option_item"]}>
            <img src={emailIcon} alt="Email Icon" />
            <span>Email</span>
          </div>

          <div className={cs["side-option_item"]}>
            <img src={contactsIcon} alt="Contacts Icon" />
            <span>Contacts</span>
          </div>

          <div className={cs["side-option_item"]}>
            <img src={chatIcon} alt="Chat Icon" />
            <span>Chat</span>
          </div>

          <div className={cs["side-option_item"]}>
            <img src={dealsIcon} alt="Deals Icon" />
            <span>Deals</span>
          </div>
        </nav>
        <div className={cs["side-option_settings"]}>
          <img src={settingsIcon} alt="Settings Icon" />
          <span>Settings</span>
        </div>
        <div className={cs["side-option_toggle"]}>
          <img src={toggleIcon} alt="Toggle Sidebar Icon" />
          <span>Toggle sidebar</span>
        </div>
      </div>
      <div className={cs["content"]}>
        <div className={cs["header-section"]}>
          <div className={cs["sort-feature_wrapper"]}>
            <div className={cs["sort-feature_date"]}>
              <p>
                Date:<span>Today</span>
                <img src={arrowIcon} alt="Arrow Down Icon" />
              </p>
            </div>
            <div className={cs["sort-feature_type"]}>
              <p>
                Type:<span>All</span>
                <img src={arrowIcon} alt="Arrow Down Icon" />
              </p>
            </div>
          </div>

          <div className={cs["btn-wrapper"]}>
            <button className={cs["btn-default"]}> Create task</button>
          </div>
        </div>
        <div className={cs["table"]}>
          <div className={cs["rt-thread-header"]}>
            <div className={cs["rt-tr"]}>
              <div className={cs["rt-th"]}>
                <input type="checkbox" />
              </div>
              <div className={cs["rt-th"]}>Status</div>
              <div className={cs["rt-th"]}>Title</div>
              <div className={cs["rt-th"]}>Type</div>
              <div className={cs["rt-th"]}>Associated with</div>
              <div className={cs["rt-th"]}>Due date</div>
            </div>
          </div>
          <div className={cs["rt-tbody"]}>
            <div className={cs["rt-body_row_1"]}>
              <div className={cs["rt-th-checkbox"]}>
                <input type="checkbox" />
              </div>
              <div className={cs["rt-th-status"]}>Active</div>
              <div className={cs["rt-th-title"]}>Send benefit review by Friday</div>
              <div className={cs["rt-th-type"]}>Reminder</div>
              <div className={cs["rt-th-associated"]}>
                <img src={lindseyStroud} alt="Lindsey Stroud" />
                <span>Lindsey Stroud</span>
              </div>
              <div className={cs["rt-th-duedate"]}>Dec 14, 2018</div>
            </div>
          </div>
          <div className={cs["rt-body_row_2"]}>
            <div className={cs["rt-th-checkbox"]}>
              <input type="checkbox" />
            </div>
            <div className={cs["rt-th-status"]}>Ended</div>
            <div className={cs["rt-th-title"]}>Call to check in</div>
            <div className={cs["rt-th-type"]}>Call</div>
            <div className={cs["rt-th-associated"]}>
              <img src={nicciTraioni} alt="Nicci Traioni" />
              <span>Nicci Traioni</span>
            </div>
            <div className={cs["rt-th-duedate"]}>Dec 14, 2018</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

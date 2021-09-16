import cs from "./App.module.css";
import userPhoto from "./assets/img/user-icon.jpg";

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
      </div>
      <div className={cs["content"]}>CONTENT</div>
    </div>
  );
}

export default App;

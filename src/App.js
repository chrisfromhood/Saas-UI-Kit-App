import cs from "./App.module.css";
import Table from "./components/Table";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

// HEADER
import arrowIcon from "./assets/img/icons/arrow.svg";
import heroPhoto from "./assets/img/sign/undraw_feeling_proud.svg";

// className={cs[""]}
//className={`${cs["prva-klasa"]} ${cs["druga-klasa"]}`}
function App() {
  return (
    <div>
      <section className={cs["landing-page"]}>
        <div className={cs["sign-in"]}>SIGN IN</div>
        <div className={cs["big-hero"]}>
          <div className={cs["big-hero_wrapper"]}>
            <img src={heroPhoto} alt="Hero" className={cs["big-hero_photo"]} />
            <h1 className={cs["big-hero_header"]}>Manage everything in one place</h1>
            <p className={cs["big-hero_text"]}>Accusam noluisse mel et. Ius duis menandri ne, rebum exerci ad his. Quo at tollit veniam assueverit.</p>
          </div>
        </div>


      </section>

      <div className={cs["container"]}>

        <Searchbar />

        <Sidebar />

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

          <Table />
        </div>

      </div>

    </div>
  );
}

export default App;

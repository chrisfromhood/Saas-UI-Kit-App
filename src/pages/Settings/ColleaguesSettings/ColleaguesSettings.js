import cs from "./ColleaguesSettings.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import SettingsPanel from "../../../components/SettingsPanel/SettingsPanel";
import ColleaguesRow from "./ColleaguesRow/ColleaguesRow";


// HEADER
import searchIcon from "../../../assets/img/icons/search.svg";

// USERsLOGOs
import rebecca from "../../../assets/img/users/rebbeccaMoore.jpg";
import nicci from "../../../assets/img/users/nicciTraioni.jpg";
import franz from "../../../assets/img/users/franzFerdinand.jpg";
import john from "../../../assets/img/users/john.jpg";
import nicol from "../../../assets/img/users/nicol.jpg";
import joseph from "../../../assets/img/users/joseph.jpg";
import george from "../../../assets/img/users/georgeFields.jpg";
import judith from "../../../assets/img/users/judith.jpg";



function ColleaguesSettings() {
    return (

        <AppPage>
            <div className={cs["content"]}>
                <SettingsPanel></SettingsPanel>

                <div className={cs["integrations-container"]}>

                    <div className={cs["integrations-header-wrapper"]}>

                        <div className={cs["header-title_wrapper"]}>
                            <h2>Colleagues preferences</h2>
                            <div className={cs["header-btn_wrapper"]}>
                                <span className={cs["btn_tertiary"]}>Invite new</span>
                                <span>+</span>
                            </div>
                        </div>



                        <div className={cs["searchbar"]}>
                            <form action="#" className={cs["search"]}>
                                <button className={cs["search__button"]}>
                                    <img src={searchIcon} alt="Search Icon" />
                                </button>
                                <input type="text" className={cs["search__input"]} placeholder="Search colleagues" />
                            </form>
                        </div>
                    </div>

                    <div className={cs["row-wrapper"]}>
                        <ColleaguesRow
                            userLogo={rebecca}
                            userName="Rebecca Moore"
                        />
                        <ColleaguesRow
                            userLogo={nicci}
                            userName="Nicci Troiani"
                        />

                        <ColleaguesRow
                            userLogo={franz}
                            userName="Franz Ferdinand"
                        />

                        <ColleaguesRow
                            userLogo={john}
                            userName="John Smith"
                        />

                        <ColleaguesRow
                            userLogo={nicol}
                            userName="Nikol Ricci"
                        />

                        <ColleaguesRow
                            userLogo={joseph}
                            userName="Joseph Gonzalez"
                        />

                        <ColleaguesRow
                            userLogo={george}
                            userName="George Fields"
                        />

                        <ColleaguesRow
                            userLogo={judith}
                            userName="Judith Williams"
                        />




                    </div>


                </div>



            </div>

        </AppPage>


    );
}
export default ColleaguesSettings;
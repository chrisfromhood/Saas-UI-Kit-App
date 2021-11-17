import cs from "./IntegrationsSettings.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import SettingsPanel from "../../../components/SettingsPanel/SettingsPanel";

// HEADER
import arrowIcon from "../../../assets/img/icons/arrow.svg"
import searchIcon from "../../../assets/img/icons/search.svg";

function IntegrationsSettings() {
    return (

        <AppPage>
            <div className={cs["content"]}>
                <SettingsPanel></SettingsPanel>

                <div className={cs["integrations-container"]}>

                    <div className={cs["integrations-header"]}>
                        <h2>Integrations</h2>
                        <div className={cs["sort-feature_wrapper"]}>
                            <div className={cs["sort-feature_date"]}>
                                <p>Date:<span>Today</span>
                                    <img src={arrowIcon} alt="Arrow Down Icon" />
                                </p>
                            </div>
                            <div className={cs["sort-feature_type"]}>
                                <p>Type:
                                    <span>All</span>
                                    <img src={arrowIcon} alt="Arrow Down Icon" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cs["searchbar"]}>
                        <form action="#" className={cs["search"]}>
                            <button className={cs["search__button"]}>
                                <img src={searchIcon} alt="Search Icon" />
                            </button>
                            <input type="text" className={cs["search__input"]} placeholder="Search integrations" />
                        </form>
                    </div>

                </div>

            </div>

        </AppPage>


    );
}
export default IntegrationsSettings;
import cs from "./IntegrationsSettings.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import SettingsPanel from "../../../components/SettingsPanel/SettingsPanel";
import IntegrationCard from "./IntegrationCard/IntegrationCard";

// HEADER
import arrowIcon from "../../../assets/img/icons/arrow.svg"
import searchIcon from "../../../assets/img/icons/search.svg";

// CARDS LOGOS
import slackLogo from "../../../assets/img/logos/Slack_RGB.svg"
import deleteIcon from "../../../assets/img/icons/baseline-delete.svg";



function IntegrationsSettings() {
    return (

        <AppPage>
            <div className={cs["content"]}>
                <SettingsPanel></SettingsPanel>

                <div className={cs["integrations-container"]}>

                    <div className={cs["integrations-header-container"]}>
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
                    <h4>Your integrations</h4>

                    <div className={cs["your-integrations_wrapper"]}>
                        {/* Slack Integrations Card */}
                        <IntegrationCard
                            logo={slackLogo}
                            title="Slack"
                            description="Slack is a digital workplace that connects you to the people and tools you work with everyday."
                            connected
                        />
                        {/* Facebook Integrations Card */}
                        <IntegrationCard
                            logo={slackLogo}
                            title="Slack"
                            description="Slack is a digital workplace that connects you to the people and tools you work with everyday."
                            connected
                        />
                        {/* Integrations Card */}
                        <IntegrationCard
                            logo={slackLogo}
                            title="Slack"
                            description="Slack is a digital workplace that connects you to the people and tools you work with everyday."
                            connected
                        />

                    </div>
                </div>



            </div>

        </AppPage>


    );
}
export default IntegrationsSettings;
import cs from "./IntegrationsSettings.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import SettingsPanel from "../../../components/SettingsPanel/SettingsPanel";
import IntegrationCard from "./IntegrationCard/IntegrationCard";

// HEADER
import arrowIcon from "../../../assets/img/icons/arrow.svg"
import searchIcon from "../../../assets/img/icons/search.svg";

// CARDS LOGOS
import slackLogo from "../../../assets/img/logos/Slack_RGB.svg"
import fbLogo from "../../../assets/img/logos/facebook-app-logo.svg"
import zenLogo from "../../../assets/img/logos/Zendesk_logo_RGB.svg"
import mcLogo from "../../../assets/img/logos/MailChimp_2018.svg"
import wpLogo from "../../../assets/img/logos/Wordpress-Logo.svg"
import sfLogo from "../../../assets/img/logos/Salesforce.svg"

import deleteIcon from "../../../assets/img/icons/baseline-delete.svg";



function IntegrationsSettings() {
    return (

        <AppPage>
            <div className={cs["content"]}>
                <SettingsPanel></SettingsPanel>

                <div className={cs["integrations-container"]}>

                    <div className={cs["integrations-header-wrapper"]}>
                        <div className={cs["integrations-header"]}>
                            <h2>Integrations</h2>
                            <div className={cs["sort-feature_wrapper"]}>
                                <div className={cs["sort-feature_category"]}>
                                    <p>Category:<span>All</span>
                                        <img src={arrowIcon} alt="Arrow Down Icon" />
                                    </p>
                                </div>
                                <div className={cs["sort-feature_filter"]}>
                                    <p>Filter:
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
                            logo={fbLogo}
                            title="Facebook Ads"
                            description="Connect your Facebook Ads account and never struggle to report on the success."
                            connected
                        />
                        {/* Integrations Card */}
                        <IntegrationCard
                            logo={zenLogo}
                            title="Zendesk"
                            description="Gain more insights into the customer experience with the new Zendesk activity integration."
                            connected
                        />

                    </div>

                    <h4>Popular integrations</h4>

                    <div className={cs["your-integrations_wrapper"]}>
                        {/* Slack Integrations Card */}
                        <IntegrationCard
                            logo={mcLogo}
                            title="MailChimp"
                            description="Connect your lead flows and collected forms to your MailChimp account."
                            connected={false}
                        />
                        {/* Facebook Integrations Card */}
                        <IntegrationCard
                            logo={wpLogo}
                            title="WordPress"
                            description="Connect with WordPress blog or website to convert website visitors into leads or buyers."
                            connected={false}
                        />
                        {/* Integrations Card */}
                        <IntegrationCard
                            logo={sfLogo}
                            title="Zendesk"
                            description="Sync Salesforce for a fast, reliable and powerful integratio between your two databases."
                            connected={false}
                        />

                    </div>
                </div>



            </div>

        </AppPage>


    );
}
export default IntegrationsSettings;
/* eslint-disable jsx-a11y/anchor-is-valid */
import cs from "./AccountSettings.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import SettingsPanel from "../../../components/SettingsPanel/SettingsPanel";
import Account from "./Account/Account";


function AccountSettings() {
    return (
        <AppPage>
            <div className={cs["content"]}>
                <SettingsPanel></SettingsPanel>

                <Account></Account>

            </div>

        </AppPage>
    );
}

export default AccountSettings;
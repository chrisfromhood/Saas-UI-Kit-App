import cs from "./NotificationsSettings.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import SettingsPanel from "../../../components/SettingsPanel/SettingsPanel";
import Notifications from "./Notifications/Notifications";



function NotificationsSettings() {
    return (
        <AppPage>
            <div className={cs["content"]}>
                <SettingsPanel></SettingsPanel>
                <Notifications></Notifications>


            </div>

        </AppPage>
    );
}

export default NotificationsSettings;
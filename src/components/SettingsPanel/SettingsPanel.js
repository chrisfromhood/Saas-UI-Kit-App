import React from "react";
import cs from "./SettingsPanel.module.css";
import SettingsItem from "./SettingsItem/SettingsItem";

import accountIcon from "../../assets/img/icons/account.svg";
import notificationIcon from "../../assets/img/icons/notify.svg";
import intergrationsIcon from "../../assets/img/icons/integrations.svg";
import collegauesIcon from "../../assets/img/icons/colleagues.svg";
import tagsIcon from "../../assets/img/icons/tags.svg";

function SettingsPanel() {
    return (

        <div className={cs["settings-bar"]}>

            <SettingsItem
                icon={accountIcon}
                title="Account"
                description="Your account preferences"
            />
            <SettingsItem
                icon={notificationIcon}
                title="Notifications"
                description="Your notifications preferences"
            />
            <SettingsItem
                icon={intergrationsIcon}
                title="Integrations"
                description="Add or remove integrations"
            />
            <SettingsItem
                icon={collegauesIcon}
                title="Colleagues"
                description="Your colleagues preferences"
            />
            <SettingsItem
                icon={tagsIcon}
                title="Tags"
                description="Add or remove tags"
            />

        </div>

    );
}

export default SettingsPanel;
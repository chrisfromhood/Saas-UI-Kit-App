import React from "react";
import cs from "./SettingsPanel.module.css";

import accountIcon from "../../assets/img/icons/account.svg";
import notificationIcon from "../../assets/img/icons/notify.svg";
import intergrationsIcon from "../../assets/img/icons/integrations.svg";
import collegauesIcon from "../../assets/img/icons/colleagues.svg";
import tagsIcon from "../../assets/img/icons/tags.svg";

function SettingsPanel() {
    return (

        <div className={cs["settings-bar"]}>
            <div className={cs["settings-bar_item"]}>
                <img src={accountIcon} alt="Account Icon" className={cs["settings-bar_icon"]} />
                <div className={cs["settings-bar_wrapper"]}>
                    <a href="/" className={cs["settings-bar_label"]}>Account</a>
                    <span className={cs["settings-bar_details"]}>Your account preferences</span>
                </div>
            </div>
            <div className={cs["settings-bar_item"]}>
                <img src={notificationIcon} alt="Account Icon" className={cs["settings-bar_icon"]} />
                <div className={cs["settings-bar_wrapper"]}>
                    <a href="/" className={cs["settings-bar_label"]}>Notifications</a>
                    <span className={cs["settings-bar_details"]}>Your notifications preferences</span>
                </div>
            </div>
            <div className={cs["settings-bar_item"]}>
                <img src={intergrationsIcon} alt="Account Icon" className={cs["settings-bar_icon"]} />
                <div className={cs["settings-bar_wrapper"]}>
                    <a href="/" className={cs["settings-bar_label"]}>Integrations</a>
                    <span className={cs["settings-bar_details"]}>Add or remove integrations</span>
                </div>
            </div>
            <div className={cs["settings-bar_item"]}>
                <img src={collegauesIcon} alt="Account Icon" className={cs["settings-bar_icon"]} />
                <div className={cs["settings-bar_wrapper"]}>
                    <a href="/" className={cs["settings-bar_label"]}>Colleagues</a>
                    <span className={cs["settings-bar_details"]}>Your colleague preferences</span>
                </div>
            </div>
            <div className={cs["settings-bar_item"]}>
                <img src={tagsIcon} alt="Account Icon" className={cs["settings-bar_icon"]} />
                <div className={cs["settings-bar_wrapper"]}>
                    <a href="/" className={cs["settings-bar_label"]}>Tags</a>
                    <span className={cs["settings-bar_details"]}>Add or remove tags</span>
                </div>
            </div>
        </div>

    );
}

export default SettingsPanel;
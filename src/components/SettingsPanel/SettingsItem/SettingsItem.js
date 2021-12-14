import React from "react";
import cs from "./SettingsItem.module.css";

function SettingsItem({ icon, title, description }) {
    return (

        <div className={cs["settings-bar_item"]}>
            <img src={icon} alt="Account Icon" className={cs["settings-bar_icon"]} />
            <div className={cs["settings-bar_wrapper"]}>
                <a href="/" className={cs["settings-bar_label"]}>{title}</a>
                <span className={cs["settings-bar_details"]}>{description}</span>
            </div>
        </div>

    );
}

export default SettingsItem;
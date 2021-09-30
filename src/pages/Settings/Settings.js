/* eslint-disable jsx-a11y/anchor-is-valid */
import cs from "./Settings.module.css";
import AppPage from "../../components/AppPage/AppPage";
import Button from "../../components/Button/Button";

import accountIcon from "../../assets/img/icons/account.svg";
import notificationIcon from "../../assets/img/icons/notify.svg";
import intergrationsIcon from "../../assets/img/icons/integrations.svg";
import collegauesIcon from "../../assets/img/icons/colleagues.svg";
import tagsIcon from "../../assets/img/icons/tags.svg";

function Settings() {
    return (
        <AppPage>
            <div className={cs["content"]}>
                <div className={cs["settings-bar"]}>
                    <div className={cs["settings-bar_item"]}>
                        <img src={accountIcon} alt="Account Icon" className={cs["settings-bar_icon"]} />
                        <div className={cs["settings-bar_wrapper"]}>
                            <a href="#" className={cs["settings-bar_label"]}>Account</a>
                            <span className={cs["settings-bar_details"]}>Your account preferences</span>
                        </div>
                    </div>
                    <div className={cs["settings-bar_item"]}>
                        <img src={notificationIcon} alt="Account Icon" className={cs["settings-bar_icon"]} />
                        <div className={cs["settings-bar_wrapper"]}>
                            <a href="#" className={cs["settings-bar_label"]}>Notifications</a>
                            <span className={cs["settings-bar_details"]}>Your notifications preferences</span>
                        </div>
                    </div>
                    <div className={cs["settings-bar_item"]}>
                        <img src={intergrationsIcon} alt="Account Icon" className={cs["settings-bar_icon"]} />
                        <div className={cs["settings-bar_wrapper"]}>
                            <a href="#" className={cs["settings-bar_label"]}>Integrations</a>
                            <span className={cs["settings-bar_details"]}>Add or remove integrations</span>
                        </div>
                    </div>
                    <div className={cs["settings-bar_item"]}>
                        <img src={collegauesIcon} alt="Account Icon" className={cs["settings-bar_icon"]} />
                        <div className={cs["settings-bar_wrapper"]}>
                            <a href="#" className={cs["settings-bar_label"]}>Colleagues</a>
                            <span className={cs["settings-bar_details"]}>Your colleague preferences</span>
                        </div>
                    </div>
                    <div className={cs["settings-bar_item"]}>
                        <img src={tagsIcon} alt="Account Icon" className={cs["settings-bar_icon"]} />
                        <div className={cs["settings-bar_wrapper"]}>
                            <a href="#" className={cs["settings-bar_label"]}>Tags</a>
                            <span className={cs["settings-bar_details"]}>Add or remove tags</span>
                        </div>
                    </div>
                </div>
                <div className={cs["settings-preferences"]}>
                    <h2>Account preferences</h2>
                    <div className={cs["grid-settings-preferences"]}>
                        <div className={cs["grid-settings-preferences_1"]}>
                            <label>Time zone<br></br></label>
                            <select>
                                <option>UTC 05:00 Eastern Time</option>
                            </select>
                        </div>
                        <div className={cs["grid-settings-preferences_2"]}>
                            <label>Language<br></br></label>
                            <select>
                                <option>English</option>
                            </select>
                        </div>
                        <div className={cs["grid-settings-preferences_3"]}>
                            <label>Date and number format<br></br></label>
                            <select>
                                <option>United States </option>
                            </select>
                        </div>
                        <div className={cs["grid-settings-preferences_4"]}>
                            <label>Currency<br></br></label>
                            <select>
                                <option>US dollars $</option>
                            </select>
                        </div>

                    </div>
                    {/* <Button /> */}
                </div>

            </div>

        </AppPage>
    );
}

export default Settings;
/* eslint-disable jsx-a11y/anchor-is-valid */
import cs from "./Settings.module.css";
import AppPage from "../../components/AppPage/AppPage";
import Button from "../../components/Button/Button";
import SettingsPanel from "../../components/Sidebars/SettingsPanel";


function Settings() {
    return (
        <AppPage>
            <div className={cs["content"]}>
                <SettingsPanel></SettingsPanel>

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
                        <Button>Save</Button>

                    </div>

                </div>

            </div>

        </AppPage>
    );
}

export default Settings;
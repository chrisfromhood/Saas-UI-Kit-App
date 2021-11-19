import cs from "./Account.module.css";
import Button from "../../../../components/Button/Button";


function Account() {
    return (


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
                        <option>United States</option>
                    </select>
                </div>
                <div className={cs["grid-settings-preferences_4"]}>
                    <label>Currency<br></br></label>
                    <select>
                        <option>US dollars $</option>
                    </select>
                </div>

            </div>

            <div className={cs["btn-wrapper_save"]}>
                <Button className={`${cs["btn-default"]}`}>Save</Button>
            </div>
        </div>

    );
}

export default Account;
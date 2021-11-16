import cs from "./Notifications.module.css";
import Button from "../../components/Button/Button";


function Notifications() {
    return (


        <div className={cs["notifications-preferences"]}>
            <h2>Notifications preferences</h2>

            <div className={cs["notifications-field_box"]}>
                <div className={cs["text_wrapper"]}>
                    <h3>Browser tab notifications</h3>
                    <p>Display a count of new messages in the browser tab.</p>
                </div>
                <div className={cs["checkbox_wrapper"]}>
                    <input className={cs["checkbox_icon"]} type="checkbox" checked />
                </div>
            </div>

            <div className={cs["notifications-field_box"]}>
                <div className={cs["text_wrapper"]}>
                    <h3>Email notifications</h3>
                    <p>Email</p>
                    <input className={cs["email"]} type="text" placeholder="s.ferguson@gmail.com"></input>
                </div>
                <div className={cs["checkbox_wrapper"]}>
                    <input className={cs["checkbox_icon"]} type="checkbox" checked />
                </div>
            </div>

            <div className={cs["notifications-field_box"]}>
                <div className={cs["text_wrapper"]}>
                    <h3>Automatically disable email notifications</h3>
                    <div>
                        <p>From</p>
                    </div>

                </div>
                <div className={cs["checkbox_wrapper"]}>
                    <input className={cs["checkbox_icon"]} type="checkbox" />
                </div>
            </div>




            <div className={cs["btn-wrapper_save"]}>
                <Button className={`${cs["btn-default"]}`}>Save</Button>
            </div>
        </div>

    );
}

export default Notifications;
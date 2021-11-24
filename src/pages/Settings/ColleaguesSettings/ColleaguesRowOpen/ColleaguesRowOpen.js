import cs from "./ColleaguesRowOpen.module.css";
import ArrowUp from "../../../../assets/img/icons/arrow_up.svg";

function ColleaguesRowOpen({ userLogo, userName }) {
    return (

        <div className={cs["row-wrapper"]}>

            <div className={cs["row"]}>

                <div className={cs["row-user_wrapper"]}>
                    <img className={cs["row-user_wrapper_logo"]} src={userLogo} alt="User Logo" />
                    <h5 className={cs["row-user_name"]}>{userName}</h5>
                </div>

                <div className={cs["row-user_status_wrapper"]}>
                    <div className={cs["status_select"]}>
                        <span className={cs["status_title"]}>Edit</span>
                        <img className={cs["arrow-up-icon"]} src={ArrowUp} alt="Arrow Up Icon" />
                    </div>
                    <div className={cs["status_select_open"]}>
                        <div className={cs["status_select_dropdown"]}>Admin</div>
                        <div className={cs["status_select_dropdown"]}>Read</div>
                    </div>

                </div>

            </div>

        </div>

    );
}
export default ColleaguesRowOpen;
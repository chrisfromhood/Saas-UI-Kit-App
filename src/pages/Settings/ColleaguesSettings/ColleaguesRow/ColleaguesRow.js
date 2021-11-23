import cs from "./ColleaguesRow.module.css";
import ArrowDown from "../../../../assets/img/icons/arrow_down.svg";

function ColleaguesRow({ userLogo, userName, admin = false, edit = false, read = false }) {
    return (

        <div className={cs["row-wrapper"]}>

            <div className={cs["row"]}>

                <div className={cs["row-user_wrapper"]}>
                    <img className={cs["row-user_wrapper_logo"]} src={userLogo} alt="User Logo" />
                    <h5 className={cs["row-user_name"]}>{userName}</h5>
                </div>

                <div className={cs["row-user_status_wrapper"]}>
                    <div
                        className={`
                            ${cs["status_select"]} 
                            ${admin ? cs["admin"] : ""}
                            ${edit ? cs["edit"] : ""}
                            ${read ? cs["read"] : ""}
                        `}
                    >

                        <span className={cs["status_title"]}>
                            {admin ? "Admin" : ""}
                            {edit ? "Edit" : ""}
                            {read ? "Read" : ""}
                        </span>
                        <img className={cs["arrow-down-icon"]} src={ArrowDown} alt="Arrow Down Icon" />
                    </div>
                </div>

            </div>

        </div>

    );
}
export default ColleaguesRow;
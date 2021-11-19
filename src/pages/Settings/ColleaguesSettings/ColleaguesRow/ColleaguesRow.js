import cs from "./ColleaguesRow.module.css";

function ColleaguesRow({ userLogo, userName }) {
    return (

        <div className={cs["row-wrapper"]}>

            <div className={cs["row"]}>

                <div className={cs["row-user_wrapper"]}>
                    <img className={cs["row-user_wrapper_logo"]} src={userLogo} alt="User Logo" />
                    <h5 className={cs["row-user_name"]}>{userName}</h5>
                </div>

                <div className={cs["row-user_status_wrapper"]}>
                    <select className={cs["status_select"]}>
                        <option value="admin">Admin</option>
                        <option value="edit">Edit</option>
                        <option value="read">Read</option>
                    </select>
                </div>

            </div>

        </div>

    );
}
export default ColleaguesRow;
import cs from "./Searchbar.module.css";

import searchIcon from "../../assets/img/icons/search.svg";
import notifyIcon from "../../assets/img/icons/notifications.svg";

function Searchbar() {
    return (

        <div className={cs["searchbar"]}>
            <form action="#" className={cs["search"]}>
                <button className={cs["search__button"]}>
                    <img src={searchIcon} alt="Search Icon" />
                </button>
                <input type="text" className={cs["search__input"]} placeholder="Search tasks" />
            </form>
            <div className={cs["notify__icon"]}>
                <img src={notifyIcon} alt="Notify Icon" />
            </div>
        </div>

    );
}

export default Searchbar;
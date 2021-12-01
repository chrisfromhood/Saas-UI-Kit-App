import cs from "./SearchbarDefault.module.css";

import searchIcon from "../../assets/img/icons/search.svg";

function SearchbarDefault({ title }) {
    return (

        <div className={cs["searchbar"]}>
            <form action="#" className={cs["search"]}>
                <div className={cs["search__button"]}>
                    <img src={searchIcon} alt="Search Icon" className={cs["search_img"]} />
                </div>
                <input type="text" className={cs["search__input"]} placeholder={title} />
            </form>
        </div>

    );
}

export default SearchbarDefault;
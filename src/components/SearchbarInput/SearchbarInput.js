import cs from "./SearchbarInput.module.css";

import searchIcon from "../../assets/img/icons/search.svg";

function SearchbarInput({ title }) {
    return (

        <div className={cs["searchbar-input"]}>
            <div className={cs["search__button"]}>
                <img src={searchIcon} alt="Search Icon" className={cs["search_img"]} />
            </div>
            <input type="text" placeholder={title} />
        </div>

    );
}

export default SearchbarInput;
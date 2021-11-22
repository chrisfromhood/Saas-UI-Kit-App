import cs from "./TagsSettings.module.css";
import AppPage from "../../../components/AppPage/AppPage";
import SettingsPanel from "../../../components/SettingsPanel/SettingsPanel";
import TagsContent from "./TagsContent/TagsContent";
import Button from "../../../components/Button/Button";

// HEADER
import searchIcon from "../../../assets/img/icons/search.svg";


function TagsSettings() {
    return (

        <AppPage>
            <div className={cs["content"]}>
                <SettingsPanel></SettingsPanel>

                <div className={cs["integrations-container"]}>

                    <div className={cs["integrations-header-wrapper"]}>

                        <div className={cs["header-title_wrapper"]}>
                            <h2>Tags</h2>
                            <div className={cs["header-btn_wrapper"]}>
                                <span className={cs["btn_tertiary"]}>Create new</span>
                                <span>+</span>
                            </div>
                        </div>



                        <div className={cs["searchbar"]}>
                            <form action="#" className={cs["search"]}>
                                <button className={cs["search__button"]}>
                                    <img src={searchIcon} alt="Search Icon" />
                                </button>
                                <input type="text" className={cs["search__input"]} placeholder="Search tag" />
                            </form>
                        </div>
                    </div>

                    <TagsContent></TagsContent>
                    <div className={cs["btn-wrapper_save"]}>
                        <Button className={`${cs["btn-default"]}`}>Save</Button>
                    </div>

                </div>





            </div>

        </AppPage>


    );
}
export default TagsSettings;
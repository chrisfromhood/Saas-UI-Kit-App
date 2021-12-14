import cs from "./Tasks.module.css";
import AppPage from "../../components/AppPage/AppPage";
import Button from "../../components/Button/Button";
import SortFeature from "../../components/SortFeature/SortFeature";


function Tasks() {
    return (
        <AppPage>
            <div className={cs["content"]}>
                <div className={cs["header-wrapper"]}>
                    <div className={cs["sort-feature-wrapper"]}>
                        <SortFeature
                            title='Date'
                            all='Today' />
                        <SortFeature
                            title='Type'
                            all='All' />
                    </div>
                    <Button className={`${cs["btn-default"]}`}>Create task</Button>
                </div>
            </div>
        </AppPage>
    );
}

export default Tasks;
import cs from "./Tasks.module.css";
import Table from "../../components/Table/Table";
import AppPage from "../../components/AppPage/AppPage";
import Button from "../../components/Button/Button";

// HEADER
import arrowIcon from "../../assets/img/icons/arrow.svg";
import TasksHeader from "./TasksHeader/TasksHeader";

function Tasks() {
    return (
        <AppPage>
            <div className={cs["content"]}>
                <TasksHeader>
                    <div className={cs["sort-feature_wrapper"]}>
                        <div className={cs["sort-feature_date"]}>
                            <p>
                                Date:<span>Today</span>
                                <img src={arrowIcon} alt="Arrow Down Icon" />
                            </p>
                        </div>
                        <div className={cs["sort-feature_type"]}>
                            <p>
                                Type:<span>All</span>
                                <img src={arrowIcon} alt="Arrow Down Icon" />
                            </p>
                        </div>
                    </div>

                    <Button className={cs["button-mg_right"]}></Button>

                </TasksHeader>

                <Table />
            </div>
        </AppPage>
    );
}

export default Tasks;
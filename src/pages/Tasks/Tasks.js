import cs from "./Tasks.module.css";
import Table from "../../components/Table";
import Sidebar from "../../components/Sidebar";
import Searchbar from "../../components/Searchbar";
import ButtonDefault from "../../components/ButtonDefault"

// HEADER
import arrowIcon from "../../assets/img/icons/arrow.svg";
import TasksHeader from "./TasksHeader/TasksHeader";

function Tasks() {
    return (
        <div>

            <div className={cs["container"]}>

                <Searchbar />

                <Sidebar />

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

                        <ButtonDefault className={cs["button-mg_right"]}></ButtonDefault>

                    </TasksHeader>

                    <Table />
                </div>

            </div>

        </div>
    );
}

export default Tasks;
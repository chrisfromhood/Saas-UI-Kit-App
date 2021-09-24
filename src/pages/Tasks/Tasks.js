import cs from "./Tasks.module.css";
import Table from "../../components/Table";
import Sidebar from "../../components/Sidebar";
import Searchbar from "../../components/Searchbar";

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
                    <TasksHeader className={`${cs["test-class"]} ${cs["test-class-2"]}`}>
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

                        <div className={cs["btn-wrapper"]}>
                            <button className={cs["btn-default"]}> Create task</button>
                        </div>
                    </TasksHeader>

                    <Table />
                </div>

            </div>

        </div>
    );
}

export default Tasks;
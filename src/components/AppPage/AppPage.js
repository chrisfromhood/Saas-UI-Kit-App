import cs from "./AppPage.module.css"
import Sidebar from "../Sidebars/Sidebar";
import Searchbar from "../Searchbar/Searchbar";

function AppPage({ children }) {
    return (
        <div>

            <div className={cs["container"]}>

                <Searchbar />

                <Sidebar />

                {children}
            </div>

        </div>
    );
}

export default AppPage;
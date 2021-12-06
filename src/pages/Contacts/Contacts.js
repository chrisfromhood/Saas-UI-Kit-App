import cs from "./Contacts.module.css";
import AppPage from "../../components/AppPage/AppPage";
import TasksHeader from "../Tasks/TasksHeader/TasksHeader";
import Button from "../../components/Button/Button";
import SortFeature from "../../components/SortFeature/SortFeature";
import TableGrid from "./TableGrid/TableGrid";


function Contacts() {
  return (
    <AppPage>
      <div className={cs["content"]}>
        <TasksHeader>
          <div>
            <SortFeature title='Company' />
          </div>


          <div className={cs["btn-wrapper_save"]}>
            <Button className={`${cs["btn-default"]}`}>Add Contact</Button>
          </div>

        </TasksHeader>

        <TableGrid></TableGrid>


      </div>

    </AppPage>
  );
}
export default Contacts;
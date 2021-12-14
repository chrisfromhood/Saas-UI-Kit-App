import cs from "./Contacts.module.css";
import AppPage from "../../components/AppPage/AppPage";
import Button from "../../components/Button/Button";
import SortFeature from "../../components/SortFeature/SortFeature";
import TableGrid from "./TableGrid/TableGrid";

function Contacts() {
  return (
    <AppPage>
      <div className={cs["content"]}>
        <div className={cs["header-wrapper"]}>
          <SortFeature
            title='Company'
            all='All'
          />
          <Button className={`${cs["btn-default"]}`}>Add Contact</Button>
        </div>
        <TableGrid></TableGrid>
      </div>
    </AppPage>
  );
}
export default Contacts;
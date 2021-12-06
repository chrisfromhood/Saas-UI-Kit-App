import cs from "./TableGrid.module.css";
import TableRow from "./TableRow/TableRow";
import lindsey from "../../../assets/img/users/lindseyStroud.jpg";
import nicci from "../../../assets/img/users/nicciTraioni.jpg";
import george from "../../../assets/img/users/georgeFields.jpg";
import rebeca from "../../../assets/img/users/rebbeccaMoore.jpg";
import jane from "../../../assets/img/users/janeDoe.jpg";
import jones from "../../../assets/img/users/jones.jpg";
import martin from "../../../assets/img/users/martin.jpg";
import franz from "../../../assets/img/users/franzFerdinand.jpg";
import john from "../../../assets/img/users/john.jpg";
import judith from "../../../assets/img/users/judith.jpg";




function TableGrid() {
  return (

    <div className={cs["table-grid"]}>
      <div className={cs["table-head"]}>

        <div className={`${cs["head-cell"]} ${cs["th-1"]}`}><input type="checkbox" /></div>
        <div className={`${cs["head-cell"]} ${cs["th-2"]}`}>Name</div>
        <div className={`${cs["head-cell"]} ${cs["th-3"]}`}>Email</div>
        <div className={`${cs["head-cell"]} ${cs["th-4"]}`}>Company name</div>
        <div className={`${cs["head-cell"]} ${cs["th-5"]}`}>Role</div>
        <div className={`${cs["head-cell"]} ${cs["th-6"]}`}>Forecast</div>
        <div className={`${cs["head-cell"]} ${cs["th-7"]}`}>Recent activity</div>

      </div>

      <div className={cs["table-body"]}>
        <TableRow
          userLogo={lindsey}
          userName="Lindsey Stroud"
          email="lindsey.stroud@gmail.com"
          company="Hatchbuck"
          role="Manager"
          forecast="50 %"
          activity="5 Minutes ago"

        />

        <TableRow
          userLogo={nicci}
          userName="Nicci Troiani"
          email="nicci.troiani@gmail.com"
          company="Slack"
          role="Manager"
          forecast="75 %"
          activity="14 Minutes ago"

        />

        <TableRow
          userLogo={george}
          userName="George Fields"
          email="george.fields@gmail.com"
          company="Clockify"
          role="CEO"
          forecast="10 %"
          activity="6 Hours ago"

        />

        <TableRow
          userLogo={rebeca}
          userName="Rebecca Moore"
          email="rebecca.moore@gmail.com"
          company="Upwork"
          role="Manager"
          forecast="25 %"
          activity="Dec 14, 2018"

        />

        <TableRow
          userLogo={jane}
          userName="Jane Doe"
          email="jane.doe@gmail.com"
          company="Trello"
          role="Engineer"
          forecast="30 %"
          activity="Dec 12, 2018"

        />

        <TableRow
          userLogo={jones}
          userName="Jones Dermot"
          email="dermot.jones@gmail.com"
          company="Slack"
          role="Developer"
          forecast="40 %"
          activity="Dec 11, 2018"

        />

        <TableRow
          userLogo={martin}
          userName="Martin Merces"
          email="martin.merces@gmail.com"
          company="Google"
          role="Manager"
          forecast="60 %"
          activity="Dec 9, 2018"

        />

        <TableRow
          userLogo={franz}
          userName="Franz Ferdinand"
          email="franz.ferdiand@gmail.com"
          company="Facebook"
          role="Manager"
          forecast="100 %"
          activity="Dec 6, 2018"

        />

        <TableRow
          userLogo={john}
          userName="John Smith"
          email="john.smith@gmail.com"
          company="Skype"
          role="CEO"
          forecast="75 %"
          activity="Nov 30, 2018"

        />

        <TableRow
          userLogo={judith}
          userName="Judith Williams"
          email="judith.williams@gmail.com"
          company="Google"
          role="Designer"
          forecast="45 %"
          activity="Nov 26, 2018"

        />



      </div>
    </div>



  );
}
export default TableGrid;
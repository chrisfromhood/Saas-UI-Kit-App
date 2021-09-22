
import React from "react";
import cs from "./Table.module.css";

import lindseyStroud from "../assets/img/users/lindseyStroud.jpg";
import nicciTraioni from "../assets/img/users/nicciTraioni.jpg";
import georgeFields from "../assets//img/users/georgeFields.jpg";
import rebbeccaMoore from "../assets//img/users/rebbeccaMoore.jpg";

function Table() {
  return (
    <div className={cs["table"]}>

      <div className={cs["table-head"]}>

        <div className={cs["table-row"]}>
          <div className={`${cs["head-cell"]} ${cs["checkbox-width"]}`}>
            <input type="checkbox" />
          </div>
          <div className={`${cs["head-cell"]} ${cs["status-width"]}`}>Status</div>
          <div className={`${cs["head-cell"]} ${cs["title-width"]}`}>Title</div>
          <div className={`${cs["head-cell"]} ${cs["type-width"]}`}>Type</div>
          <div className={`${cs["head-cell"]} ${cs["associated-width"]}`}>Associated with</div>
          <div className={`${cs["head-cell"]} ${cs["duedate-width"]}`}>Due date</div>
        </div> {/*!--- .table-row-0 ---  */}

      </div>

      <div className={cs["table-body"]}>

        <div className={cs["table-row"]}>

          <div className={`${cs["data-cell"]} ${cs["data-cell_checkbox"]}`}>
            <input type="checkbox" />
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_status"]}`}>
            <div className={`${cs["btn-status"]} ${cs["active"]}`}>Active</div>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_title"]}`}>Send benefit review by Friday</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_type"]}`}>Reminder</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_associated"]}`}>
            <img src={lindseyStroud} alt="Lindsey Stroud" />
            <span>Lindsey Stroud</span>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_duedate"]}`}>Dec 14, 2018</div>
        </div> {/*!--- .table-row-1 ---  */}

        <div className={cs["table-row"]}>
          <div className={`${cs["data-cell"]} ${cs["data-cell_checkbox"]}`}>
            <input type="checkbox" />
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_status"]}`}>
            <div className={`${cs["btn-status"]} ${cs["ended"]}`}>Ended</div>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_title"]}`}>Call to check in</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_type"]}`}>Call</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_associated"]}`}>
            <img src={nicciTraioni} alt="Nicci Traioni" />
            <span>Nicci Traioni</span>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_duedate"]}`}>Dec 14, 2018</div>
        </div> {/*!--- .table-row-2 ---  */}

        <div className={cs["table-row"]}>
          <div className={`${cs["data-cell"]} ${cs["data-cell_checkbox"]}`}>
            <input type="checkbox" />
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_status"]}`}>
            <div className={`${cs["btn-status"]} ${cs["completed"]}`}>Completed</div>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_title"]}`}>Office meet-up</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_type"]}`}>Event</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_associated"]}`}>
            <img src={georgeFields} alt="George Fields" />
            <span>George Fields</span>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_duedate"]}`}>Dec 14, 2018</div>
        </div> {/*!--- .table-row-3 ---  */}

        <div className={cs["table-row"]}>
          <div className={`${cs["data-cell"]} ${cs["data-cell_checkbox"]}`}>
            <input type="checkbox" />
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_status"]}`}>
            <div className={`${cs["btn-status"]} ${cs["completed"]}`}>Completed</div>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_title"]}`}>Invite to office meet-up</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_type"]}`}>Call</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_associated"]}`}>
            <img src={georgeFields} alt="George Fields" />
            <span>George Fields</span>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_duedate"]}`}>Dec 12, 2018</div>
        </div> {/*!--- .table-row-4 ---  */}

        <div className={cs["table-row"]}>

          <div className={`${cs["data-cell"]} ${cs["data-cell_checkbox"]}`}>
            <input type="checkbox" />
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_status"]}`}>
            <div className={`${cs["btn-status"]} ${cs["active"]}`}>Active</div>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_title"]}`}>Office meet-up</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_type"]}`}>Reminder</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_associated"]}`}>
            <img src={nicciTraioni} alt="Nicci Traioni" />
            <span>Nicci Traioni</span>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_duedate"]}`}>Dec 11, 2018</div>

        </div> {/*!--- .table-row-5 ---  */}

        <div className={cs["table-row"]}>
          <div className={`${cs["data-cell"]} ${cs["data-cell_checkbox"]}`}>
            <input type="checkbox" />
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_status"]}`}>
            <div className={`${cs["btn-status"]} ${cs["ended"]}`}>Ended</div>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_title"]}`}>Send benefit review</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_type"]}`}>Reminder</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_associated"]}`}>
            <img src={lindseyStroud} alt="Lindsey Stroud" />
            <span>Lindsey Stroud</span>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_duedate"]}`}>Dec 10, 2018</div>
        </div> {/*!--- .table-row-6 ---  */}

        <div className={cs["table-row"]}>
          <div className={`${cs["data-cell"]} ${cs["data-cell_checkbox"]}`}>
            <input type="checkbox" />
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_status"]}`}>
            <div className={`${cs["btn-status"]} ${cs["active"]}`}>Active</div>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_title"]}`}>Call to check in</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_type"]}`}>Call</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_associated"]}`}>
            <img src={lindseyStroud} alt="Lindsey Stroud" />
            <span>Lindsey Stroud</span>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_duedate"]}`}>Dec 10, 2018</div>
        </div> {/*!--- .table-row-7 ---  */}

        <div className={cs["table-row"]}>
          <div className={`${cs["data-cell"]} ${cs["data-cell_checkbox"]}`}>
            <input type="checkbox" />
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_status"]}`}>
            <div className={`${cs["btn-status"]} ${cs["completed"]}`}>Completed</div>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_title"]}`}>Office meet-up</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_type"]}`}>Event</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_associated"]}`}>
            <img src={nicciTraioni} alt="Nicci Traioni" />
            <span>Nicci Traioni</span>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_duedate"]}`}>Dec 9, 2018</div>
        </div> {/*!--- .table-row-8 ---  */}

        <div className={cs["table-row"]}>
          <div className={`${cs["data-cell"]} ${cs["data-cell_checkbox"]}`}>
            <input type="checkbox" />
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_status"]}`}>
            <div className={`${cs["btn-status"]} ${cs["ended"]}`}>Ended</div>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_title"]}`}>Invite to office meet-up</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_type"]}`}>Reminder</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_associated"]}`}>
            <img src={georgeFields} alt="George Fields" />
            <span>George Fields</span>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_duedate"]}`}>Dec 7, 2018</div>
        </div> {/*!--- .table-row-9 ---  */}

        <div className={cs["table-row"]}>
          <div className={`${cs["data-cell"]} ${cs["data-cell_checkbox"]}`}>
            <input type="checkbox" />
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_status"]}`}>
            <div className={`${cs["btn-status"]} ${cs["ended"]}`}>Ended</div>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_title"]}`}>Office meet-up</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_type"]}`}>Call</div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_associated"]}`}>
            <img src={rebbeccaMoore} alt="Rebbeca Moore" />
            <span>Rebbeca Moore</span>
          </div>
          <div className={`${cs["data-cell"]} ${cs["data-cell_duedate"]}`}>Dec 10, 2018</div>
        </div> {/*!--- .table-row-10 ---  */}

      </div>
    </div>

  );
}

export default Table;

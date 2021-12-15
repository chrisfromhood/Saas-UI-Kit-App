import cs from "./TasksTableGrid.module.css";
import TasksTableRow from "../TasksTableRow/TasksTableRow";
import StatusTag from "../../../components/StatusTag/StatusTag";
import TableCheckbox from "../../../components/TableCheckbox/TableCheckbox";
import lin from "../../../assets/img/users/lindseyStroud.jpg"
import reb from "../../../assets/img/users/rebbeccaMoore.jpg"
import nicci from "../../../assets/img/users/nicciTraioni.jpg"
import george from "../../../assets/img/users/georgeFields.jpg"

function TasksTableGrid() {
  return (

    <div className={cs["table-grid"]}>
      <div className={cs["table-head"]}>

        <div className={`${cs["head-cell"]} ${cs["th-1"]}`}>
          <TableCheckbox />
        </div>
        <div className={`${cs["head-cell"]} ${cs["th-2"]}`}>Status</div>
        <div className={`${cs["head-cell"]} ${cs["th-3"]}`}>Title</div>
        <div className={`${cs["head-cell"]} ${cs["th-4"]}`}>Type</div>
        <div className={`${cs["head-cell"]} ${cs["th-5"]}`}>Associated with</div>
        <div className={`${cs["head-cell"]} ${cs["th-6"]}`}>Due date</div>

      </div>

      <TasksTableRow
        title="Send benefit review by Friday"
        type="Reminder"
        userName="Lindsey Stroud"
        userLogo={lin}
        date="Dec 14, 2018"
      >
        <StatusTag yellow>Active</StatusTag>
      </TasksTableRow>

      <TasksTableRow
        title="Call to check in"
        type="Call"
        userName="Nicci Troiani"
        userLogo={nicci}
        date="Dec 14, 2018"
      >
        <StatusTag red>Ended</StatusTag>
      </TasksTableRow>

      <TasksTableRow
        title="Office meet-up"
        type="Event"
        userName="George Fields"
        userLogo={george}
        date="Dec 14, 2018"
      >
        <StatusTag green>Completed</StatusTag>
      </TasksTableRow>

      <TasksTableRow
        title="Invite to office meet-up"
        type="Call"
        userName="George Fields"
        userLogo={george}
        date="Dec 12, 2018"
      >
        <StatusTag green>Completed</StatusTag>
      </TasksTableRow>

      <TasksTableRow
        title="Office meet-up"
        type="Reminder"
        userName="Nicci Troiani"
        userLogo={nicci}
        date="Dec 11, 2018"
      >
        <StatusTag yellow>Active</StatusTag>
      </TasksTableRow>

      <TasksTableRow
        title="Send benefit review"
        type="Reminder"
        userName="Lindsey Stroud"
        userLogo={nicci}
        date="Dec 10, 2018"
      >
        <StatusTag red>Ended</StatusTag>
      </TasksTableRow>

      <TasksTableRow
        title="Call to check in"
        type="Call"
        userName="Lindsey Stroud"
        userLogo={lin}
        date="Dec 10, 2018"
      >
        <StatusTag yellow>Active</StatusTag>
      </TasksTableRow>

      <TasksTableRow
        title="Office meet-up"
        type="Event"
        userName="Nicci Troiani"
        userLogo={nicci}
        date="Dec 9, 2018"
      >
        <StatusTag green>Completed</StatusTag>
      </TasksTableRow>

      <TasksTableRow
        title="Invite to office meet-up"
        type="Reminder"
        userName="George Fields"
        userLogo={george}
        date="Dec 7, 2018"
      >
        <StatusTag red>Ended</StatusTag>
      </TasksTableRow>

      <TasksTableRow
        title="Office meet-up"
        type="Call"
        userName="Rebecca Moore"
        userLogo={reb}
        date="Dec 6, 2018"
      >
        <StatusTag red>Ended</StatusTag>
      </TasksTableRow>

    </div>



  );
}
export default TasksTableGrid;
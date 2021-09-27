import cs from "./TasksHeader.module.css";

function TasksHeader({ children }) {
  return (
    <div className={cs["header-section"]}>
      {children}
    </div>
  )
}

export default TasksHeader;

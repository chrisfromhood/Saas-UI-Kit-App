import cs from "./TasksHeader.module.css";

function TasksHeader({children, className}) {
  return (
    <div className={`${className} ${cs["header-section"]}`}>
      {children}
    </div>
  )
}

export default TasksHeader;

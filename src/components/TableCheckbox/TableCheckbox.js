import cs from "./TableCheckbox.module.css";

function TableCheckbox({ children, selected = false }) {
  return (
    <div className={`${cs["checkbox"]}
    ${selected ? cs["selected"] : ""}
    `}>
      {children}</div>
  );
}

export default TableCheckbox;
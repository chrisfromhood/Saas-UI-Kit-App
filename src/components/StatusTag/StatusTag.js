import cs from "./StatusTag.module.css";

function StatusTag({ children, green = false, red = false, yellow = false, purple = false }) {
  return (

    <div className={`${cs["status_select"]} 
    ${green ? cs["green"] : ""}
    ${yellow ? cs["yellow"] : ""}
    ${red ? cs["red"] : ""}
    ${purple ? cs["purple"] : ""}
    `}
    >

      <span className={cs["status_title"]}>
        {children}
      </span>

    </div>

  );
}

export default StatusTag;
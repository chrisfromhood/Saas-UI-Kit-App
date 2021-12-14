import cs from "./StatusTag.module.css";

function StatusTag({ archived = false, draft = false, sent = false, scheduled = false }) {
  return (

    <div className={`${cs["status_select"]} 
        ${archived ? cs["archived"] : ""}
        ${draft ? cs["draft"] : ""}
        ${sent ? cs["sent"] : ""}
        ${scheduled ? cs["scheduled"] : ""}
      `}
    >

      <span className={cs["status_title"]}>
        {archived ? "Archived" : ""}
        {draft ? "Draft" : ""}
        {sent ? "Sent" : ""}
        {scheduled ? "Scheduled" : ""}
      </span>

    </div>

  );
}

export default StatusTag;
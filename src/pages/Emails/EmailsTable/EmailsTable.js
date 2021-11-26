
import React from "react";
import cs from "./EmailsTable.module.css";
import TableHead from "./TableHead/TableHead";

function EmailsTable() {
  return (
    <div className={cs["general-table"]}>
      <TableHead></TableHead>

    </div>

  );
}

export default EmailsTable;
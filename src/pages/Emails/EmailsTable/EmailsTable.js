
import React from "react";
import cs from "./EmailsTable.module.css";
import TableHead from "./TableHead/TableHead";
import TableRow from "./TableRow/TableRow";
import TableChecked from "../EmailsChecked/TableChecked/TableChecked";

function EmailsTable() {
  return (
    <div className={cs["general-table"]}>
      <TableHead></TableHead>
      {/* <TableChecked></TableChecked> */}
      <TableRow
        draft
        subject="September Content Offer"
        lastUpdated="Aug 17, 2018"
        openRate="0%"
      />

      <TableRow
        archived
        subject="SourceCode"
        lastUpdated="Aug 15, 2018"
        openRate="50%"
      />

      <TableRow
        sent
        subject="Instant notification email for blog “Abi’s Blog”"
        lastUpdated="Aug 10, 2018"
        openRate="100%"
      />

      <TableRow
        sent
        subject="Internal email"
        lastUpdated="Aug 6, 2018"
        openRate="75%"
      />

      <TableRow
        draft
        subject="September Content Offer"
        lastUpdated="Aug 4, 2018"
        openRate="0%"
      />

      <TableRow
        archived
        subject="SourceCode"
        lastUpdated="Aug 4, 2018"
        openRate="50%"
      />

      <TableRow
        scheduled
        subject="Instant notification email for blog “Abi’s Blog”"
        lastUpdated="Aug 2, 2018"
        openRate="100%"
      />

      <TableRow
        sent
        subject="Internal email"
        lastUpdated="Aug 1, 2018"
        openRate="75%"
      />

      <TableRow
        scheduled
        subject="Instant notification email for blog “Abi’s Blog”"
        lastUpdated="Jul 29, 2018"
        openRate="100%"
      />

      <TableRow
        archived
        subject="SourceCode"
        lastUpdated="Jul 27, 2018"
        openRate="50%"
      />



    </div>

  );
}

export default EmailsTable;
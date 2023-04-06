import React from "react";
import TableDetails from "./TableDetails";

const AllTable = (props) => {
  return (
    <React.Fragment>
      <TableDetails
        table="Table-1"
        data={props.data}
        onDelete={props.onDelete}
      ></TableDetails>
      <TableDetails
        table="Table-2"
        data={props.data}
        onDelete={props.onDelete}
      ></TableDetails>
      <TableDetails
        table="Table-3"
        data={props.data}
        onDelete={props.onDelete}
      ></TableDetails>
    </React.Fragment>
  );
};

export default AllTable;

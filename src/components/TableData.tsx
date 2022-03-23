import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
const TableData: React.FC<any> = ({ user }) => {
  return (
    <>
      <TableCell component="th" scope="row">
        {user.title}
      </TableCell>
      <TableCell component="th" scope="row">
        {user.author}
      </TableCell>
      <TableCell component="th" scope="row">
        {user.url}
      </TableCell>
      <TableCell component="th" scope="row">
        {user.created_at}
      </TableCell>
    </>
  );
};

export default TableData;

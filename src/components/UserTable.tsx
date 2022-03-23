import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableData from "./TableData";

const UserTable: React.FC<any> = ({ data }) => {
  return (
    <TableContainer
      sx={{ marginTop: "30px", maxWidth: 1200 ,maxHeight:550}}
      component={Paper}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead >
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: any, i: number) => (
            <>
              <TableRow
                key={item.created_at}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableData user={item} />
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;

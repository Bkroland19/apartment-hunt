import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "../../axios";
import { Link } from "react-router-dom";
import "./MyRent.Style.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function AdminServiceList({ user }) {
  const classes = useStyles();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log(user.email);
    axios
      .get(`/api/booking/${user.email}`)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => alert(error.message));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>House name</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <StyledTableRow key={booking._id}>
              <StyledTableCell component="th" scope="row">
                {booking.service.title}
              </StyledTableCell>
              <StyledTableCell align="center">
                ${booking.service.price}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Link
                  to={`/housedetails/${booking.service._id}`}
                  className=" btn detailsLink"
                >
                  View Details
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminServiceList;

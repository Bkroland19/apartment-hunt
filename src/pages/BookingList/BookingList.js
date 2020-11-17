import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./BookingList.style.css";
import axios from "../../axios";

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

function AdminServiceList() {
  const classes = useStyles();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/booking`)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => alert(error.message));
  }, []);

  const handleChange = (id, value) => {
    console.log(id, value);

    axios
      .patch(`/api/booking/update?id=${id}`, { status: value })
      .then((response) => {
        alert(response.data);
        window.location.reload(false);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Email ID</StyledTableCell>
            <StyledTableCell align="left">Phone No</StyledTableCell>
            <StyledTableCell align="left">Message</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <StyledTableRow key={booking._id}>
              <StyledTableCell component="th" scope="row">
                {booking.username}
              </StyledTableCell>
              <StyledTableCell align="left">{booking.email}</StyledTableCell>
              <StyledTableCell align="left">{booking.phone}</StyledTableCell>
              <StyledTableCell align="left">{booking.message}</StyledTableCell>
              <StyledTableCell align="left">
                <select
                  value={booking.status}
                  onChange={(e) => handleChange(booking._id, e.target.value)}
                  className={`admin__status ${booking.status}`}
                >
                  <option value="pending" className="pending">
                    Pending
                  </option>
                  <option value="ongoing" className="ongoing">
                    Ongoing
                  </option>
                  <option value="done" className="done">
                    Done
                  </option>
                </select>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminServiceList;

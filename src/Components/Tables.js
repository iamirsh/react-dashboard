import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(order_no, total_amount, total_quantity, user_name) {
  return { order_no, total_amount, total_quantity, user_name};
}

const rows = [
  createData(85, 45000, 15, "Rohit Kumar"),
  createData(69, 35000, 12, "Atif Khan"),
  createData(77, 37000, 9, "Suraj Rao"),
  createData(25, 30000, 6, "Malini Gupta"),
  createData(35, 29000, 5, "Arun Rai"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <h1>Top 5 order</h1>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order No</StyledTableCell>
            <StyledTableCell align="right">Total Amount</StyledTableCell>
            <StyledTableCell align="right">Total Quantity</StyledTableCell>
            <StyledTableCell align="right">User Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) =>(
            <StyledTableRow key={row.order_no}>
              <StyledTableCell component="th" scope="row">
                {row.order_no}
              </StyledTableCell>
              <StyledTableCell align="right">{row.total_amount}</StyledTableCell>
              <StyledTableCell align="right">{row.total_quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.user_name}</StyledTableCell> 
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
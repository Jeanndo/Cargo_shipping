import React from "react";
import TableCell from '@material-ui/core/TableCell';

const Truck = ({truck}) => {
 
  return (
    <>
            <TableCell component="th" scope="row">
             {truck.driver}
            </TableCell>
            <TableCell align="right">{truck.licensePlate}</TableCell>
            <TableCell align="right">{truck.product}</TableCell>
            <TableCell align="right">{truck.quantity}</TableCell>
            <TableCell align="right">{truck.destination}</TableCell>
  </>
  );
};
export default Truck;
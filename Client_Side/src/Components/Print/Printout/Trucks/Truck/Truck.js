import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Truck = ({ truck, setCurrentId }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user?.result?._id);
  return (
    <>
      <TableCell component="th" scope="row">
        {truck.driver}
      </TableCell>
      <TableCell align="right">{truck.licensePlate}</TableCell>
      <TableCell align="right">{truck.product}</TableCell>
      <TableCell align="right">{truck.quantity}</TableCell>
      <TableCell align="right">
        <LocationOnIcon style={{ color: "#00bb77" }} />
        {truck.Location}
      </TableCell>
      <TableCell align="right">{truck.Cargo_ID}</TableCell>
      <TableCell align="right">{truck.destination}</TableCell>
    </>
  );
};
export default Truck;

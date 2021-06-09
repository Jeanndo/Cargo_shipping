import React,{useState}from "react";
import TableCell from '@material-ui/core/TableCell';
import {useDispatch,useSelector} from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteTruck} from "../../../../redux/actions/trucks";
import {Button} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Truck = ({truck,setCurrentId}) => {
  const dispatch = useDispatch();
  const[user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));
console.log(user?.result?._id)
  return (
    <>
            <TableCell component="th" scope="row">
             {truck.driver}
            </TableCell>
            <TableCell align="right">{truck.licensePlate}</TableCell>
            <TableCell align="right">{truck.product}</TableCell>
            <TableCell align="right">{truck.quantity}</TableCell>
            <TableCell align="right"><LocationOnIcon style={{color:'#00bb77'}}/>{truck.Location}</TableCell>
            <TableCell align="right">{truck.Cargo_ID}</TableCell>
            <TableCell align="right">{truck.destination}</TableCell>
            <TableCell align="right">
            {(user?.result?._id===truck.userId)&&(
             <Button size="small">
              <EditIcon 
             style={{cursor:'pointer',color:'#00bb77'}}
             onClick={()=>setCurrentId(truck._id)}
             />
             </Button>
              )} 
             </TableCell>
            <TableCell align="right">
            {(user?.result?._id===truck.userId)&&(
               <Button size="small">
                <DeleteIcon  style={{cursor:'pointer',color:'#00bb77'}}
                onClick={()=>dispatch(deleteTruck(truck._id))}/>
                </Button>
            )}        
              </TableCell>
  
  </>
  );
};
export default Truck;

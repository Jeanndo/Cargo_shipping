import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch,useSelector} from 'react-redux';
import {createTruck,updateTruck}  from '../../redux/actions/trucks';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Form = ({currentId,setCurrentId})=>{
    const classes = useStyles();
   const [truckData,setTrucData] = useState({driver:'',licensePlate:'',product:'',quantity:'',destination:''});
   const truck = useSelector((state)=>currentId?state.trucks.find((truck)=>truck._id===currentId):null)
   const dispatch =useDispatch();
   const user =JSON.parse(localStorage.getItem('profile'));

  useEffect(()=>{
    if(truck)setTrucData(truck);
  },[truck]);   

   const handleSubmit = (e)=>{
     e.preventDefault();
     if(currentId){
       dispatch(updateTruck(currentId,{...truckData,name:user?.result?.name}));
     }else{
     dispatch(createTruck({...truckData,name:user?.result?.name}));
    }
    clear();
   }

    const clear = ()=>{
   setCurrentId(null);
   setTrucData({driver:'',licensePlate:'',product:'',quantity:'',destination:''});
   }

console.log("TruckData",truckData);
    return (
        <form className={`${classes.root} form`} noValidate onSubmit={handleSubmit} autoComplete="off">
        <div>
        <TextField
            label="Driver Name"
            placeholder="Driver Name"
            multiline
            variant="outlined"
            value={truckData.driver}
            onChange={(e)=>setTrucData({...truckData,driver:e.target.value})}
          />
           <TextField
            label="License Plate"
            placeholder="License Plate"
            multiline
            variant="outlined"
            value={truckData.licensePlate}
            onChange={(e)=>setTrucData({...truckData,licensePlate:e.target.value})}
          />
          <TextField
            label="Product"
            placeholder="Poduct"
            multiline
            variant="outlined"
            value={truckData.product}
            onChange={(e)=>setTrucData({...truckData,product:e.target.value})}
          />
          <TextField
            label="Quantity"
            placeholder="Quantity"
            multiline
            variant="outlined"
            value={truckData.quantity}
            onChange={(e)=>setTrucData({...truckData,quantity:e.target.value})}
          />
          <TextField
            label="Destination"
            placeholder="Destination"
            multiline
            variant="outlined"
            value={truckData.destination}
            onChange={(e)=>setTrucData({...truckData,destination:e.target.value})}
          />
        </div>
        <Button type="submit"variant="contained" color="primary">SAVE</Button>
      </form>
    )
}
export default Form;

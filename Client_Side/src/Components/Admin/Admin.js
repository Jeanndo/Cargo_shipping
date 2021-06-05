import React,{useState,useEffect} from 'react';
import Form from '../Form/Form';
import Trucks from '../Trucks/Trucks';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from "react-redux";
import {getTrucks} from '../../redux/actions/trucks';
import {getUsers} from '../../redux/actions/user';
import Users from '../Users/Users';
import Navbar from './Navbar/Navbar';
import { useSelector} from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Admin = ()=>{

  const classes = useStyles();
  const [currentId,setCurrentId]= useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(getTrucks(),getUsers());
  },[dispatch]);
  
  const users= useSelector((state) => state.users);
   console.log(users)

    return (
   <div className={`${classes.root} container`}>
  
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <Navbar/>
      </Grid>
      <Grid item xs={12} >
        <Paper className={classes.paper}>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
          <Trucks setCurrentId={setCurrentId}/>
        </Paper>
      </Grid>
      {/* <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <Users
          />
          </Paper>
      </Grid> */}
    </Grid>
   </div>
    )
}
export default Admin;


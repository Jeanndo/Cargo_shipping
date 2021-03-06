import React,{useState,useEffect} from 'react';
import Form from '../Form/Form';
import Trucks from './Trucks/Trucks';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from "react-redux";
import {getTrucks} from '../../redux/actions/trucks';
import Navbar from './Navbar/Navbar';

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

const Driver = ()=>{

  const classes = useStyles();
  const [currentId,setCurrentId]= useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(getTrucks());
  },[dispatch]);
  
    return (
   <div className={`${classes.root} driver-container`}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <Navbar/>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
          <Trucks setCurrentId={setCurrentId}/>
        </Paper>
      </Grid>
    </Grid>
   </div>
    )
}
export default Driver;


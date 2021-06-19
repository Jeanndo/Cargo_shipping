import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";
import {Link} from 'react-router-dom';

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

const  Contents = () =>{
  const classes = useStyles();

  return (
    <div className={`${classes.root} container`}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className="header">CARGO SHIPPING</h1>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <p>
            Looking for Cargo Shipping?
            We can Ship for you.
            </p>
            <Button 
            component={Link}
            to="/landing/getstarted"
            variant="outlined" color="primary">Get Started</Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <p>
             We Deliver On time Your Cargo On Time
            </p>
            <Button
            component={Link}
            to="/landing/getstarted"
             variant="outlined" color="primary">Get Started</Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <p>
             We Ship from Different Countries.
            </p>
            <Button 
            component={Link}
            to="/landing/getstarted"
            variant="outlined" color="primary">Get Started</Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <p>
             Make request By Emailing at example@gmail.com!

            </p>
            <Button 
            component={Link}
            to="/landing/getstarted"
            variant="outlined" color="primary">Get Started</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contents;
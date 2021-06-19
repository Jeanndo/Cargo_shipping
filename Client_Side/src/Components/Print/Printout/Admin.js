import React, { useState, useEffect } from "react";
import Trucks from "./Trucks/Trucks";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import { getTrucks } from "../../../redux/actions/admin";
import Navbar from "./Navbar/Navbar";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Admin = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrucks());
  }, [dispatch]);

  return (
    <div className={`${classes.root} adminContainer`}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button 
          style={{marginTop:'-7%'}}
          color="primary"
           component={Link} to="/admin"
          variant="outlined"
          >
            Go Back
            </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Trucks setCurrentId={setCurrentId} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Admin;

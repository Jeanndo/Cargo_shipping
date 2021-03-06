import React,{useState,useEffect} from "react";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppBar, Avatar, Typography,Toolbar,Button } from "@material-ui/core";
import useStyles from "./styles";
import Cargo from "../../../Assets/newlogo.png";
import {Link,useHistory,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';
import Auth from '../Auth';
import Users from  '../AllUsers';

const NavBar = ({users}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const Location =useLocation();

  const[user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));

   console.log(user?.result?.role);

   const Logout =()=>{

   dispatch({type:'LOGOUT'});
   history.push('/');
   setUser(null);
   }
  useEffect(()=>{
    const token = user?.token;
    //JWT
   if(token){
     const decodedToken = decode(token);
     
     if(decodedToken.exp * 1000 < new Date().getTime())Logout();
   }
    setUser(JSON.parse(localStorage.getItem('profile'))) 
  },[Location])


    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handlePrint = ()=>{
      history.push('/print');
    }
  return (
    <>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Auth handleClose={handleClose}/>
          </div>
        </Fade>
      </Modal>

     <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          variant="h6"
          align="center"
        >
         Cargo Shipping
        </Typography>
        <img className={classes.image} src={Cargo} alt="icon" height="60" />
        <Button variant="outlined" color="primary" onClick={handlePrint} style={{marginLeft:'10px',marginRight:'10px'}}>Print</Button>
        <Button variant="outlined" color="primary" onClick={handleOpen} className="ml-5">Add Employee</Button>
         <Users users={users}/>
      </div>

      <Toolbar className={classes.toolbar}>
        {user?(
          <div className={classes.profile}>
         <Avatar className={classes.purple} alt={user.result.name==="ADMIN"||user.result.name==="admin"?user.result.name:"Admin"}src="cargo Transport">
           {user.result.name==="ADMIN"||user.result.name==="admin"?user.result.name.charAt(0):"A"}
           </Avatar>
         <Typography className={classes.userName} variant="h6">{user.result.name==="ADMIN"||user.result.name==="admin"?user.result.name:'Admin'}</Typography>
          <Button variant="outlined" className={classes.logout} color="secondary"onClick={Logout}>Logout</Button>
         </div>
        ):( 
        <Button component={Link} to="/"  variant="outlined"color="primary">Sign In</Button>
        )}
         
      </Toolbar>
    </AppBar>
    </>
  );
};
export default NavBar;
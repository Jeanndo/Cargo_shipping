import React,{useState} from 'react';
import {Avatar,Button,Paper,Grid,Typography,Container} from "@material-ui/core";
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {signin} from '../../redux/actions/auth';

const initialState = {firstName:'',lastName:'',email:'',password:'',confirmPassword:''};
const Auth = () => {

    const classes = useStyles();
    const [showPassword,setShowPassword] = useState(false);
    const [formData,setFormData] = useState(initialState);

    const dispatch = useDispatch();
    const history = useHistory();
    const handleShowPassword = ()=>setShowPassword((prevShowPassword)=>!prevShowPassword);

    const handleSubmit = (event)=>{

        event.preventDefault();
        console.log(formData)
        dispatch(signin(formData,history))
       
   }

   const handleChange = (event)=>{
    setFormData({...formData,[event.target.name]:event.target.value});
   }
  

    return (
       <Container component="main"maxWidth="xs">
         <Paper className={classes.paper}elevation={3}>
             <Avatar className={classes.avatar}>
                 <LockOutlinedIcon/>
             </Avatar>
             <Typography variant="h6">Welcome To Cargo Transport</Typography>
             <hr style={{backgroundColor:"#000"}}/>
             <Typography variant="h5">Sign In</Typography>
             <form className={classes.form} onSubmit={handleSubmit}>
             <Grid container spacing={3}>
               <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
               <Input name="password" label={showPassword? 'text' : 'password'} handleChange={handleChange} type="password" handleShowPassword={handleShowPassword}/>
             </Grid>
             <Button type="submit" variant="contained" color="primary" className={classes.submit} fullWidth>
                Sign In
             </Button>
             </form>
             </Paper>
       </Container>
    )
}

export default Auth;

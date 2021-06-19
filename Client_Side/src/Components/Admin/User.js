import React from 'react';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {Button } from "@material-ui/core"
import {deleteUser} from "../../redux/actions/user";
import {useDispatch} from "react-redux";

const User = ({user})=>{
      const dispatch = useDispatch();
    return (
              <>
             <p style={{color:'#fff'}}> FirstName:{user.name}</p>
             <p style={{color:'#fff'}}> FirstName: {user.lastName}</p>
             <p style={{color:'#fff'}}> FirstName: {user.email}</p>
             <p style={{color:'#fff'}}> FirstName: {user.phone}</p>
             <Button variant="outlined" color="primary"style={{marginLeft:'40px'}}>
              <RemoveCircleIcon 
               onClick={()=>dispatch(deleteUser(user._id))}
              />
              </Button>
              <hr style={{backgroundColor:'#fff'}} 
              onClick={()=>console.log(user._id)}/>
             </>
           
    )
}
export default User;
import React from 'react';
import User from './User';
const Users = ({users})=>{
    return (
     <div className="users">

       {users?.map((user,index)=>(
        <div className="inner-user-container"key={index} style={{backgroundColor:'#00bb77'}}>
        <User user={user}/>
        </div>
       ))}
    </div>
    )
}
export default Users;
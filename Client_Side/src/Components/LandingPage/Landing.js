import React from 'react';
import Contents from './Contents';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Landing  = ()=>{
    return (
    <div className="Landing">
       
     <div className="logo-landing">
         <img
          alt="logo" src="https://cdn.pixabay.com/photo/2016/08/24/16/34/cargo-ship-1617351_960_720.jpg"/>
         </div> 
         <Button 
         component={Link}
         to="/landing/getstarted"
         variant="outlined"
         style={{color:'#fff',float:'right',margin:'-15% 5% 0 0'}}
         >
          Get Started
         </Button>
         <div>
        <Contents/> 
      </div>
    </div>

    )
}
export default Landing;
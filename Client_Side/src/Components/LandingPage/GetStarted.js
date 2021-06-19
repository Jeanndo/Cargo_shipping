import React, { useState } from 'react';
import { Drawer} from 'antd';
import { Button } from '@material-ui/core';
import Auth from '../ClientAuth/Auth';
import {Link} from 'react-router-dom';

const GetStarted = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="LandingAuth-container">
      <Button 
      style={{float:'right',color:'#fff',margin:'5% 5% 0 0'}}
      variant="outlined"  onClick={showDrawer}>
        Login/Sign UP
      </Button>
      <Button
        component ={Link}
        to="/"
        style={{color:'#fff',margin:'5% 0 0 5%'}}
       variant="outlined" onClick={showDrawer}>
        Go Back
      </Button>
      <Drawer  
        height={550}
        title="You Are WelCome!!"
        placement="top"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
       <Auth/>
      </Drawer>
    </div>
  );
};

export default  GetStarted;

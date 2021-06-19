import React, { useState } from 'react';
import { Drawer} from 'antd';
import { Button} from '@material-ui/core';
import Users from  './Users';

const AllUsers = ({users}) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button variant="outlined"color="primary" onClick={showDrawer} style={{marginLeft:'10px'}}>
       Show Users
      </Button>
      <Drawer
        title="Users"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
       <Users users={users}/>
      </Drawer>
    </>
  );
};

export default AllUsers;
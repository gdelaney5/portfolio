import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import Mobile from '../Mobile';

import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <Mobile />
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;
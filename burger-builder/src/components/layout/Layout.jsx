import React from 'react';
import Aux from '../../hoc/Aux.jsx';
import style from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.jsx';


const Layout = ( props ) => (
  <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={style.Content}>
        { props.children }
      </main>
  </Aux>
);

export default Layout;

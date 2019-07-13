import React from 'react';
import Aux from '../../hoc/Aux.jsx';
import style from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.jsx';


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: true
    }

    this.handleSideDrawerClose = this.handleSideDrawerClose.bind(this);
    this.drawerToggleClicked = this.drawerToggleClicked.bind(this);
  }

  drawerToggleClicked() {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    });
  }

  handleSideDrawerClose () {
    this.setState({
      showSideDrawer: false
    })
  }

  render() {
    return(
      <Aux>
        <Toolbar drawerToggleClicked={this.drawerToggleClicked}/>
        <SideDrawer show={this.state.showSideDrawer} handleSideDrawerClose={this.handleSideDrawerClose}/>
        <main className={style.Content}>
          { this.props.children }
        </main>
      </Aux>
    )
  }
}


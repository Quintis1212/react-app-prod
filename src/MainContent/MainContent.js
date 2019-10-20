import React, { Component } from 'react';
import classes from './MainContent.css';
import Home from './Home/Home';
import About from './About/About';
import LogIn from './LogIn/LogIn';
import Contacts from './Contacts/Contacts';


class MainContent extends Component {
  state = {
    menuItems: ['HOME','ABOUT','LOG IN','CONTACT WITH US ...'],
    
}
  render() {
if (this.props.pageName === 'HOME'){
  return <Home/>
} else if (this.props.pageName === 'ABOUT') {
  return <About/>
}else if (this.props.pageName === 'LOG IN') {
  return <LogIn/>
}else if (this.props.pageName === 'CONTACT WITH US ...') {
  return <Contacts/>
}
    return (
      <div className={classes.MainContent}>
             {this.props.pageName}
      </div>
    );
  }

}

export default MainContent;
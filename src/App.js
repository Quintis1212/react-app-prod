import React, { Component } from 'react';
import classes from './App.css';
import MenuPanel from './MenuPanel/MenuPanel';
import MainContent from './MainContent/MainContent.js';



class App extends Component {
state = {
  pageName: 'HOME'
}

updateData = (value) => {
  this.setState({ pageName: value })
}


  render() {
    return (
      <div className={classes.App}>
           <MenuPanel updateData={this.updateData}  />
        <MainContent pageName={this.state.pageName}  />
      </div>
    );
  }
}

export default App;

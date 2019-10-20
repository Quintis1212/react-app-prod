import React, { Component } from 'react';
import classes from './MenuPanel.css';



class MenuPanel extends Component {
    state = {
        menuItems: ['HOME','ABOUT','LOG IN','CONTACT WITH US ...'],
        
    }



    render() {
      let  menuPanelArr = (arr) => {
            return (
                arr.map(el => {
                    return <h1  
                    id={`${el}`} 
                    key={Math.random()*1000}
                    onClick={() => { this.props.updateData(el)}}
                    >{el}</h1>
                })
            )
        }

      return (
          <div className={classes.MenuPanel}>
            {menuPanelArr(this.state.menuItems)}
            </div>
      );
    }
  }




export default MenuPanel;
import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
  
    render(){
      const styles={
        display:'grid',
        gridTemplateColumns: '40% 50%',
        gridTemplateRows: '2fr 1fr 1fr',      
        width: '80%',
        margin: '2rem auto 1rem auto'
      }
      
      
      const buttonRow={
        display: 'flex',
        flex:'row',
        "flex-direction": 'column',
        justifyContent: 'space-between'
      }
      
      
      return (
        
        
        <div style={styles}>
            <h1 style={{fontSize:'2.5rem'}} >{this.props.headline}</h1>
            <div>{this.props.text}</div>
            <div style={buttonRow}>
            {this.props.buttons.map((button, index)=> {
              return <Button name={button.name} path={button.path} key={index} />
              })
            }
          </div>
        </div>
      )  
    
    }
  }
  
  
  export default Header;
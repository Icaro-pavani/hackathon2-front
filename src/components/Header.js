import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
  
    render(){
      const styles={
        display:'grid',    
        width: '100%',
        margin: '0 auto 1rem auto',
        fontFamily:'Times New Roman',
        fontSize:'2.5rem'

      }
      
      
      const buttonRow={
        display: 'flex',
        flex:'row',
        flexDirection: 'column',
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
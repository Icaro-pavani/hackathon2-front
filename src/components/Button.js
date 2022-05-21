import React, { Component } from 'react';
import { BrowserRouter as  Link } from "react-router-dom";


class Button extends Component {
  render() {    
    const button={
      padding: '0 40px',
      height: '100px',
      color: '#3E497A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '1em'
    }
  
    return (
      <div>
      <Link to={this.props.path} style={{textDecoration:'none'}}>
        <button style={button}>
        {this.props.name}
        </button>
      </Link>
      </div>
    );
  }
}

export default Button;

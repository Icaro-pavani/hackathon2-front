import React, { Component } from 'react';
import Header from './components/Header.js';


class PaginaInicial extends Component {
    render() {    
      const headerText='Mathematics'
      const headerHeadline='The best Math App'
      
      const buttonArr = [
        { name: ' Matematica EF: 1 Ano', path: '/' },
        { name: 'Matematica EF: 2 Ano', path: '/' },
        { name: 'Matematica EF 3 Ano', path: '/' },
      ];

      return (
        <div>
          <Header 
          buttons={buttonArr}
          headline={headerHeadline}
          text={headerText}
          />
        </div>
      );
    }
  }
  
  export default PaginaInicial;
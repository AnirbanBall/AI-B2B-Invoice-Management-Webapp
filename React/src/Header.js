import React, { Component } from 'react';
import abclogo from './abclogo.svg';
import hrclogo from './hrclogo.svg';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={abclogo} alt="Left Image" className="left-image" />
        <img src={hrclogo} alt="Right Image" className="right-image" />
        <h3 style={{ color: 'red',marginLeft:'1.5%' }}>Invoice List</h3>
      </div>
          
      
    );
  }
}

export default Header;
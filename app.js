//var React = require('react');
import React from 'react';
var ReactDOM = require('react-dom');
var CarouselQApp = require('./components/CarouselQApp');

// Render the components, picking up where react left off on the server
//React.renderComponent(
//  <CarouselQApp/>,
//  document.getElementById('main')
//);

window.onload = () => {
  ReactDOM.render(<CarouselQApp/>, document.getElementById('main'));
};
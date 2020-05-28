import React, { Component } from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Blog from './containers/Blog/Blog'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat :200, 400, 600, 800', 'Raleway :100, 400, 600, 800', 'Amiri: 400'],
  },
});

class App extends Component {
  render() {
    return (
      //<BrowserRouter basename='/my-app'>
      <BrowserRouter>
        <div className="App" >
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

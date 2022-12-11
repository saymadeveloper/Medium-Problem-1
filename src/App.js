import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Articles from './component/Articles';
import Content from './component/Content';

class App extends Component {
  render() {
    return (
      <div className='app-class'>
        <Navbar />
        <Articles />
        <Content />
      </div>
    );
  }
}

export default App;

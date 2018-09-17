import React, { Component } from 'react';
import './App.css';

import Routes from './Router';
import SideNav from './Components/SideNav/SideNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        {Routes}
        <SideNav />
      </div>
    );
  }
}

export default App;

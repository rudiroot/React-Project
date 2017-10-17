import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';

import Filter from './Filter.js';


class App extends Component {

  render() {
    const links = [{
      linktarget: "http://www.google.de",
      linklabel: "Startseite"
    },
    {
      linktarget: "http://www.amazon.de",
      linklabel: "Über Uns"
    },
    {
      linktarget: "http://www.amazon.de",
      linklabel: "Projekte"
    }
    ];
   
    return (
      <div className="App">
      <Header linkdata={links} />
       <Filter/>
      </div>
    )
  }
}

export default App;

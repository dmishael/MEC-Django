import React, { Component } from 'react';
import Appointment from './Appointment';
import './App.css';
import SimpleMap from './SimpleMap';

class App extends Component {

  state = {
    Appointments: {
      appId: 1,
      date: "February 10, 2019",
      time: "10:00 PM",
      area: "chin",
      fee: 100,
      name: "Cindy",
      eName: "Ahoova",
  },
    internalComment: {
      appId: 1,
      comment: "string",
    },
    externalComment: {
      appId: 1,
      comment: "string",
    }
  }
    
  render() {
    return (
      <div>
        <SimpleMap/>
        <div>
          Hello world
        </div>
          <nav>hello world</nav>
          {/* <Appointment appointments = {this.state.date}/> */}
          
      </div>
    );
  }
}

export default App;

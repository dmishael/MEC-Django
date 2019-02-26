import React, { Component } from 'react';
import axios from 'axios';
import Appointments from './Appointments';
// import Appointment from './Appointment';
// import Comments from './Comments';
import './App.css';
import SimpleMap from './SimpleMap';


class App extends Component {

  state = {
    appointments: [{
      appId: 1,
      date: "February 10, 2019",
      time: "10:00 PM",
      area: "chin",
      fee: 100,
      name: "Cindy",
      eName: "Ahoova",
      clientAddress: "string",
      internalComments: [{
        appId: 1,
        comment: "string",
      }],
    }],
    image: [{
      appId: 1,
      imageUrl: "string",
    }]
  }

  componentDidMount() {
    this.getAllAppointments()
    console.log("running")
    this.getAllComments()
  }

  getAllAppointments = () => {
    axios.get("/api/appointments/").then(res => {
      console.log("get all appointments returns: " + res.data)
      this.setState({ appointments: res.data });
      console.log(this.state.appointments)
    });
  }

  getAllComments = () => {
    axios.get("/api/internalComments/").then(res => {
      console.log("get all appointments returns: " + res.data)
      this.setState({ internalComment: res.data });
      console.log(this.state.internalComment)
    });
  }
    
  render() {
    
    return (
      
      <div>
        <SimpleMap/>
       
          
          <Appointments
            appointments = {this.state.appointments}  
            
          />
        
          <nav>hello world</nav>
          
      </div>
    );
  }
}

export default App;

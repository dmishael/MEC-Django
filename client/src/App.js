import React, { Component } from 'react';
import axios from 'axios';
import Appointments from './Appointments';
// import Appointment from './Appointment';
// import Comments from './Comments';
import './App.css';
import SimpleMap from './SimpleMap';
import Image from './Image';
import styled from 'styled-components';

const Span = styled.div`
text-align: "center";
position: absolute;
top: 10%;
margin-left: 20%;
margin-right: 15%;
font-weight: bold;
font-size: 16px;
font-family: Courier New;

`


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
        intComId: 1,
        comment: "string",
      }],
    }],
    image: [{
      image: "string"
      // imgId: 1
    }],
  }

  componentDidMount() {
    this.getAllAppointments()
    console.log("running")
    this.getAllComments()
    this.getAllImages()
  }



  getAllAppointments = () => {
    axios.get("/api/v1/appointments/").then(res => {
      console.log("get all appointments returns: " + res.data)
      this.setState({ appointments: res.data });
      console.log(this.state.appointments)
    });
  }

  getAllComments = () => {
    axios.get("/api/v1/internalComments/").then(res => {
      console.log("get all appointments returns: " + res.data)
      this.setState({ internalComment: res.data });
      console.log(this.state.internalComment)
    });
  }

  getAllImages = () => {
    axios.get("/api/v1/images/").then(res => {
      console.log("get all images returns: " + res.data)
      this.setState({ image: res.data });
      console.log(this.state.image)
    });
  }


  render() {

    return (

<Span>
      <div>




        <Appointments
          appointments={this.state.appointments}
          getAllAppointments={this.getAllAppointments}
          getAllComments={this.getAllComments}
          updateComment={this.updateComment}

        />

        <SimpleMap />

        {this.state.image.map((image, i) => {
          return (
            <Image
              key={i}
              image={image.image}
              getAllImages={this.getAllImages}
              imgId={image.id}
            />

          )
        }
        )}

      </div>
      </Span>      


    )




  }
}


export default App;

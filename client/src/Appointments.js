import React, { Component } from 'react';
import Appointment from './Appointment'

class Appointments extends Component {
  render() {
    return (
      <div>
        <h1>Appointments!</h1>
        {this.props.appointments.map((appointment, i) => {
        return (
          <Appointment key = {i} 
            appointmentDate = {appointment.date}
            appointmentTime = {appointment.time}
            appointmentArea = {appointment.area}
            appointmentFee = {appointment.fee}
            appointmentName = {appointment.name}
            appointmentEName = {appointment.eName}
            appointmentClientAddress = {appointment.clientAddress}
          />
        )}

        )}
        
        
        
      </div>
    )
  }
}


export default Appointments;
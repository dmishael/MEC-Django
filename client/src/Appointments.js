import React, { Component } from 'react';
import Appointment from './Appointment'

class Appointments extends Component {
  render() {
    // this.props.appointments.map((appointment, i) => {
    //   console.log(appointment);
    // })
    return (
      <div>
        {this.props.appointments.map((appointment, i) => {
          console.log(appointment)
          return (
            <Appointment key={i}
              intComId={appointment.internalComments.length > 0
                ? appointment.internalComments[0].intComId
                : null}
              appointment={appointment}
              
              // appId={appointment.appId}
              // appointment={appointment.intComId}
              // appointmentDate={appointment.date}
              // appointmentTime={appointment.time}
              // appointmentArea={appointment.area}
              // appointmentFee={appointment.fee}
              // appointmentName={appointment.name}
              // appointmentEName={appointment.eName}
              // appointmentClientAddress={appointment.clientAddress}
              comment={appointment.internalComments.length > 0
                ? appointment.internalComments[0].comment
                : null}


              getAllAppointments={this.props.getAllAppointments}
              getAllComments={this.props.getAllComments}
              
              

            />


          )
        }

        )}




      </div>
    )

  }
}


export default Appointments;
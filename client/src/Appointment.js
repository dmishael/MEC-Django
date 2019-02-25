import React, { Component } from 'react';

class Appointment extends Component {
    render() {
        return (
            <div>
                <h1>Appointment:</h1>
                <ul>{this.props.appointmentDate}</ul>
                <ul>{this.props.appointmentTime}</ul>
            </div>
        );
    }
}

export default Appointment;
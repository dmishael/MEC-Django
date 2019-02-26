import React, { Component } from 'react';

class Appointment extends Component {
    render() {
        return (
            <div>
                <h1>Appointment:</h1>
                <ul>{this.props.appointmentDate}</ul>
                <ul>{this.props.appointmentTime}</ul>
                <ul>{this.props.appointmentName}</ul>
                <ul>{this.props.appointmentArea}</ul>
                <ul>{this.props.appointmentTime}</ul>
                <h1>{this.props.comment}</h1>
            </div>
        );
    }
}

export default Appointment;
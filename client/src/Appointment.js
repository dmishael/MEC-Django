import React, { Component } from 'react';
import axios from 'axios';
import Images from './images'


class Appointment extends Component {
    state = {
        appointment: {
            date: this.props.appointment.date,
            time: this.props.appointment.time,
            area: this.props.appointment.area,
            fee: this.props.appointment.fee,
            name: this.props.appointment.name,
            eName: this.props.appointment.eName,
            clientAddress: this.props.appointment.clientAddress,
            appId: this.props.appointment.appId,
        },
        comment: {
            appId: this.props.appointment.appId,
            comment: this.props.appointment.internalComments.comment,
            intComId: this.props.appointment.internalComments.intComId,
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        const newComment = { ...this.state.comment }
        console.log("posts here", newComment)
        newComment[event.target.name] = event.target.value
        this.setState({ comment: newComment })
    }

    handleChangeAppointmentData = (event) => {
        const newAppointmentData = { ...this.state.appointment }
        newAppointmentData[event.target.name] = event.target.value
        this.setState({ appointment: newAppointmentData })
        console.log(this.state.appointment.date)
    }

    handleSubmitAppointmentDate = (event) => {
        event.preventDefault()
        const input = this.state.appointment
        axios.post('api/v1/appointments/', input).then((res) => {
            this.props.getAllAppointments()
            this.props.getAllComments()

        })

    }

    handleSubmit = (event) => {

        event.preventDefault()
        const newComment = this.state.comment
        console.log(newComment)
        axios.post(`/api/v1/internalComments/`, newComment)
            .then(() => {
                this.props.getAllAppointments()
                this.props.getAllComments()
            })
    }

    handleEditComment = (event) => {

        event.preventDefault()
        console.log(this.props.intComId)
        const edit = this.state.comment
        const intComId = this.props.intComId
        console.log(edit)


        axios.patch(`/api/v1/internalComments/${intComId}/`, edit)
            .then(() => {
                this.props.getAllAppointments()
                this.props.getAllComments()
            })
    }

    handleEditDate = (event) => {

        event.preventDefault()
        console.log(this.props.appointmentDate)
        const edit = this.state.appointment
        const appId = this.state.appointment.appId
        console.log(edit)


        axios.patch(`/api/v1/appointments/${appId}/`, edit)
            .then(() => {
                this.props.getAllAppointments()
                this.props.getAllComments()
            })
    }
    deleteAppointmentData = (event) => {
        event.preventDefault()
        const appId = this.props.appointment.appId
        axios.delete(`/api/v1/appointments/${appId}/`)
            .then(() => {
                this.props.getAllAppointments()
                this.props.getAllComments()
            })

    }

    deleteComment = (event) => {
        event.preventDefault()
        const intComId = this.props.intComId
        axios.delete(`/api/v1/internalComments/${intComId}/`)
            .then(() => {
                this.props.getAllAppointments()
                this.props.getAllComments()
            })

    }

    // updateComment = () => {
    //     axios.patch(`/api/v1/internalComments/:commentId`)
    //       .then((res) => {
    //           this.props.getPostById()
    //       })
    //   }



    render() {
        return (
            <div>
                <Images
                      appointment = {this.state.appointment}
                      comments = {this.state.comment}
                      getAllAppointments={this.props.getAllAppointments}
                      getAllComments={this.props.getAllComments}
                      getAllImages={this.props.getAllImages}
                      images={this.props.images}

                
                />
                <form onSubmit={this.handleSubmitAppointmentDate}>
                    <div>
                        <input
                            type="text"
                            placeholder="Appointment Date"
                            name="date"
                            value={this.state.appointment.date}
                            onChange={this.handleChangeAppointmentData}
                        />
                        <input
                            type="text"
                            placeholder="Appointment Time"
                            name="time"
                            value={this.state.appointment.time}
                            onChange={this.handleChangeAppointmentData}
                        />

                    </div>
                    <button>Submit appointmentDate</button>

                </form>


                <h1>Appointment:</h1>
                <ul>{this.props.appointment.date}</ul>
                {/* <div>
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={this.state.user.address}
                            onChange={this.handleChange}
                        />
                    </div> */}


                {/* <ul>{this.props.appointmentDate}</ul> */}
                <ul>{this.props.appointment.time}</ul>
                <ul>{this.props.appointment.name}</ul>
                <ul>{this.props.appointment.area}</ul>
                <h1>{this.props.comment}</h1>
                <button onClick={(event) => this.deleteAppointmentData(event)}>Delete</button>
                <form onSubmit={this.handleEditComment}>
                    <input
                        type="text"
                        name='comment'
                        placeholder="Your comment"

                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleEditComment}>Edit</button>
                    <button onClick={(event) => this.deleteComment(event)}>Delete</button>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name='comment'
                        placeholder="Your comment"

                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>

            </div>
        );
    }
}

export default Appointment;
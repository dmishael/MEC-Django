import React, { Component } from 'react';
import axios from 'axios';

class Images extends Component {

    state = {
        images: this.props.images
    }
    componentDidMount() {
        this.getAllImages()
    }

    getAllImages = () => {
        axios.get("/api/v1/images/").then(res => {
            console.log("get all images returns: " + res.data)
            this.setState({ images: res.data });
            console.log(this.state.images)
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const input = this.state.images
        axios.post('api/v1/images/', input).then((res) => {
            this.props.getAllImages()
          

        })

    }

    render() {
        return (
            <div>
                {this.state.images}
            </div>
        );
    }
}

export default Images;
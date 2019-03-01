import React, { Component } from 'react';
import axios from 'axios';

class Image extends Component {

    state = {
        image: {
            image: this.props.image.image
            // imgId: this.props.image.imgId
        }
    }


    handleChange = (event) => {
        event.preventDefault()
        const newImage = { ...this.state.image }

        newImage[event.target.name] = event.target.value
        console.log(this.state.image)
        this.setState({ image: newImage })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const input = this.state.image
        axios.post('api/v1/images/', input)
            .then(console.log(input))
            .then((res) => {

                this.props.getAllImages()

            })

    }

    deleteComment = (event) => {
        event.preventDefault()
        axios.delete(`/api/v1/images/${this.props.imgId}/`)
            .then(() => {
                this.props.getAllImages()
            })

    }


    render() {
        // var imageName = require(this.props.image)
        return (
            <div>

                <img src={this.props.image} alt="MEC" />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Image Url"
                            name="image"
                            value={this.state.image.image}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                    <button onClick={(event) => this.deleteComment(event)}>Delete</button>
                </form>
            </div>


        );
    }
}

export default Image;
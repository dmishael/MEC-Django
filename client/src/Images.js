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

    render() {
        return (
            <div>
                {this.state.images}
            </div>
        );
    }
}

export default Images;
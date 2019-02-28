import React, { Component } from 'react';

class Images extends Component {

    state = {
        images: this.props.images
    }
    componentDidMount() {
        this.getAllImages()
      }
      
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Images;
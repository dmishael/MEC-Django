import React, { Component } from 'react';

class Image extends Component {
    
    render() {
        // var imageName = require(this.props.image)
        return (
            <div>
                {console.log(this.props.image)}
                <img src={require(this.props.image)} alt="MEC"/>
            </div>
        );
    }
}

export default Image;
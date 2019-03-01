import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div> {text} </div>;

class SimpleMap extends Component {
    
    static defaultProps = {
        center: {
            lat: 33.7490,
            lng: -84.3880
        },
        zoom: 11
    };

    render() {
        const API_KEY = process.env.REACT_APP_MAP_API_KEY

        return (

            
                <div style = {{ height: '25vh', width: '100%'}}>
                    <GoogleMapReact
                        apiKey={API_KEY}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >

                        <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser'}
                        />
                </GoogleMapReact>
                </div>

            
        );
    }
}

export default SimpleMap;
import React, { Component } from 'react';

import { InfoWindow, Marker, Map, GoogleApiWrapper } from 'google-maps-react';

import { center, apiKey, marker, zoom} from './google.json';
const google = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
}
// import { key } from './config/google';
// AIzaSyBdQEDK2GcF-wSVLy2O_Q3IPo4ePhj6WSI 

class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) 
            this.setState({ showingInfoWindow: false, activeMarker: null })
    };

    render() {
        return (
            <Map google={this.props.google}
                onClick={this.onMapClicked}
                initialCenter={center}
                zoom={zoom}>
                <Marker onClick={this.onMarkerClick}
                    name={marker.name} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}


export default GoogleApiWrapper({ apiKey })(MapContainer);
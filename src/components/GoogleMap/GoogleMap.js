import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';

const APIKey = 'AIzaSyDUNefKBuDxG4csF-0HgdnR8t-XLvZWTdU';

const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 24.012856, lng: 89.259056 }}
        >
            {props.isMarkerShown && (
                <Marker position={{ lat: 24.012856, lng: 89.259056 }} />
            )}
        </GoogleMap>
    ))
);

const GoogleMapApi = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MyMapComponent
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${APIKey}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
};

export default GoogleMapApi;

import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
const MapWrapper = withGoogleMap(props => {
    return <GoogleMap {...props}>{props.children}</GoogleMap>
});

export default MapWrapper;


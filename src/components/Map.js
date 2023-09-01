import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function SimpleMap() {
  // Update the coordinates to center the map on Raleigh, North Carolina
  const defaultProps = {
    center: {
      lat: 35.7796,
      lng: -78.6382,
    },
    zoom: 11,
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCMri9Rl4JNWzf8DXwSCq2TfXbl_7kg1js' }} // Note: This key should be kept private
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={35.7796} lng={-78.6382} text='My Marker' />
      </GoogleMapReact>
    </div>
  )
}

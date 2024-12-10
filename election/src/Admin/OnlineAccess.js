// src/modules/OnlineAccess.js
import React from 'react';
import { useGeolocated } from 'react-geolocated';

const OnlineAccess = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  if (!isGeolocationAvailable) {
    return <div>Geolocation is not available in your browser.</div>;
  }

  if (!isGeolocationEnabled) {
    return <div>Please enable geolocation to access the content.</div>;
  }

  if (coords) {
    const { latitude, longitude } = coords;
    return (
      <div>
        <h3>Your Location:</h3>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        {/* You can use these coordinates to display content based on country/region */}
        <p>Access granted to content based on your location.</p>
      </div>
    );
  }

  return <div>Loading location...</div>;
};

export default OnlineAccess;

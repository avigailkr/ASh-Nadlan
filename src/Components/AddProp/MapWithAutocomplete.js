import React, { useState } from 'react';
  import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
  import Autocomplete from 'react-google-autocomplete';

  const apiKey = ''; // Replace with your actual Google Maps API key

  const MapWithAutocomplete = ({ google }) => {
    const [selectedPlace, setSelectedPlace] = useState(null);

    const handlePlaceSelect = (place) => {
      setSelectedPlace(place);
    };

    return (
      <div>
        <Autocomplete
          apiKey={apiKey}
          placeholder="Search for a location"
          types={['geocode']}
          onPlaceSelected={handlePlaceSelect}
        />
        <Map
          google={google}
          zoom={14}
          style={{ width: '100%', height: '400px', marginTop: '10px' }}
          initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Default initial center (San Francisco coordinates)
          center={selectedPlace ? selectedPlace.geometry.location : undefined}
        >
          {selectedPlace && (
            <Marker
              position={selectedPlace.geometry.location}
              title={selectedPlace.formatted_address}
            />
          )}
        </Map>
      </div>
    );
  };

  export default GoogleApiWrapper({
    apiKey: apiKey,
  })(MapWithAutocomplete);
"use client";

import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';

const MapDeliver: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [center, setCenter] = useState({ lat: 23.6345, lng: -102.5528 });
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onPlaceChanged = () => {
    if (map && selectedPlace) {
      const newCenter = {
        lat: selectedPlace.geometry!.location.lat(),
        lng: selectedPlace.geometry!.location.lng(),
      };
      setCenter(newCenter);
      map.panTo(newCenter);
    }
  };

  return (
    <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_API_GOOGLE_MAPS}`} libraries={['places']}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={center}
        zoom={12}
        onLoad={onLoad}
      >
        {selectedPlace && (
          <Marker
            position={{
              lat: selectedPlace.geometry!.location.lat(),
              lng: selectedPlace.geometry!.location.lng(),
            }}
          />
        )}

        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar dirección"
            style={{
              boxSizing: 'border-box',
              border: '1px solid transparent',
              width: '240px',
              height: '32px',
              padding: '0 12px',
              borderRadius: '3px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
              fontSize: '14px',
              outline: 'none',
              textOverflow: 'ellipses',
              position: 'absolute',
              left: '50%',
              marginLeft: '-120px',
            }}
          />
        </Autocomplete>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapDeliver;

"use client"

import { MapContainer, TileLayer } from 'react-leaflet';
import { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MarkerHouse } from './MarkerHouse';

export function Location() {
  const coordinatePoint = {
    lat: 20.3928, 
    lng: -101.1914
  }

  const centerMarker = (position: {lat: number, lng: number}, fnMap: Map) => {
    fnMap.flyTo({
      lat: position.lat,
      lng: position.lng
    })
  }

  return (
    <div className="lg:pl-2 lg:pr-4 relative w-full">
      <MapContainer
        center={coordinatePoint}
        zoom={14}
        scrollWheelZoom={false}
        className="h-[400px] lg:h-[500px] relative z-10"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png" />
      
        <MarkerHouse selectMarker={centerMarker} />
      </MapContainer>
      <article className='flex flex-col gap-y-2 justify-center items-center z-50 pt-2 pb-4 bg-Primary 
      dark:bg-DarkPrimary text-center lg:px-4 '>
        <p className='text-gray-500 max-[500px]:text-sm'>Mueve el marcador en la entrada de tu dirección para una ubicación más precisa</p>
        <button className='lg:px-40 px-20 rounded-full py-2 bg-Secondary dark:bg-DarkSecondary lg:hover:outline
         lg:hover:outline-Accent text-lg font-semibold'>
          Guardar
        </button>
      </article>
    </div>
  )
}

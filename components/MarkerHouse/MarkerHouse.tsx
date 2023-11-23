import { Marker, Popup, useMap } from 'react-leaflet';
import { MarkerHouseProps } from './MarkerHouse.types'
import { icon } from 'leaflet';
import { housesData } from './MarkerHouse.data';

export function MarkerHouse(props: MarkerHouseProps) {
  const { selectMarker } = props;
  const fnMap = useMap();
  const customIcon = icon({
    iconUrl: 'images/map-pin.svg',
    iconSize: [40, 40]
  })

  return (
    housesData.map(({id, position}) => (
      <Marker 
        key={id} 
        position={position} 
        icon={customIcon} 
        eventHandlers={{click: () => { selectMarker(position, fnMap)}}}
        draggable
      >
        <Popup>
          <p>{position.lat}</p>
          <p>{position.lng}</p>          
        </Popup>
      </Marker>
    ))
  )
}

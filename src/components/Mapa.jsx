import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import style from '../css/Mapa.module.css'

export default function Mapa({nombre, location}) {
  return (
    <MapContainer
      center={location}
      zoom={18}
      className={style.container}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={location}>
        <Popup>
          {nombre}
        </Popup>
      </Marker>


    </MapContainer>
  )
}
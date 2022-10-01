import { useParams } from 'react-router-dom'
import TourDstyles from '../css/TourDetalle.module.css'
import Tourdetalles from '../assets/tourDetalle.json'
import Mapa from './Mapa'

export function TourDetalle() {
  const { id } = useParams()
  const data = Tourdetalles[id]

  return (
    <div className={TourDstyles.container}>
      <h1 className={TourDstyles.title}>{data.title}</h1>
      <p className={TourDstyles.description}>{data.description}</p>
      <ul className={TourDstyles.lista}>
        <li><strong>Dirección:</strong> {data.direction}</li>
        <li><strong>Telefono:</strong> {data.tel}</li>
      </ul>
      <div className={TourDstyles.images}>
        {data.images.map((image, i) => <img className={TourDstyles.image} key={i} src={image} alt={data.title} />)}
      </div>
      <Mapa nombre={data.title} location={data.location} />
    </div>
  )
}
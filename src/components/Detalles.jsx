import { useParams } from 'react-router-dom'
import styles from '../css/TourDetalle.module.css'
import tourdetalles from '../assets/tourDetalle.json'
import restauranteDetalle from '../assets/restauranteDetalle.json'
import hotelDetalle from '../assets/hotelesDetalle.json'
import Mapa from './Mapa'

export function TourDetalle() {
  const { id } = useParams()
  const data = tourdetalles[id]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <ul className={styles.lista}>
        <li><strong>Dirección:</strong> {data.direction}</li>
        <li><strong>Telefono:</strong> {data.tel}</li>
      </ul>
      <div className={styles.images}>
        {data.images.map((image, i) => <img className={styles.image} key={i} src={image} alt={data.title} />)}
      </div>
      <Mapa nombre={data.title} location={data.location} />
    </div>
  )
}

export function RestauranteDetalle() {
  const { id } = useParams()
  const data = restauranteDetalle[id]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.images}>
        {data.images.map((image, i) => <img className={styles.image} key={i} src={image} alt={data.title} />)}
      </div>
      <ul className={styles.lista}>
        <li><strong>Dirección:</strong> {data.direction}</li>
        <li><strong>Telefono:</strong> {data.tel}</li>
      </ul>
      <h2 className={styles.subtitle}>Mas Información</h2>
      <p className={styles.description}>Redes Sociales: </p>
      <ul className={styles.lista}>
        {
          data.social.map((social, i) => {
            return (
              <li key={i}><a target='_blank' className={styles.link} href={social[1]}>{social[0]}</a></li>
            )
          })
        }
      </ul>
      <Mapa nombre={data.title} location={data.location} />
    </div>
  )
}

export function HotelesDetalles() {
  const { id } = useParams()
  const data = hotelDetalle[id]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.title}</h1>
      <strong className={styles.special}>Hotel: {data.estrellas}</strong>
      <div className={styles.images}>
        {data.images.map((image, i) => <img className={styles.image} key={i} src={image} alt={data.title} />)}
      </div>
      <h2 className={styles.subtitle}>Social</h2>

      <ul className={styles.lista}>
        {
          data.social.map((social, i) => {
            return (
              <li key={i}><a target='_blank' className={styles.link} href={social[1]}>{social[0]}</a></li>
            )
          })
        }
      </ul>
    </div>
  )
}
import { useParams } from 'react-router-dom'
import styles from '../css/TourDetalle.module.css'
import detalles from '../assets/tourDetalle.json'

function TourDetalle() {
  const { id } = useParams()
  const data = detalles[id]

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
    </div>
  )
}

export default TourDetalle
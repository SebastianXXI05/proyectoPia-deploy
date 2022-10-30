import { Link } from 'react-router-dom'
import styles from '../css/Hotel.module.css'

export default ({data}) => {
  return (
    <Link to={`/hoteles/${data.id}`} className={styles.container}>
      <img className={styles.image} src={data.image} alt={data.title + ' image'} />
      <div className={styles.items}>
        <h2>{data.title}</h2>
        <p>Telefono: {data.tel}</p>
        <p>{data.stars}</p>
      </div>
    </Link>
  )
}
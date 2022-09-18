import { Link } from 'react-router-dom'
import styles from '../css/Restaurante.module.css'

function Restaurante({ data }) {
  return (
    <Link className={styles.container}>
      <img className={styles.image} src={data.image} alt={data.title + ' image'} />
      <div className={styles.items}>
        <h2>{data.title}</h2>
        <p>Telefono: {data.number}</p>
      </div>
    </Link>
  )
}

export default Restaurante
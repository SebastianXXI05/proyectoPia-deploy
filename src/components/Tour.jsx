import { Link } from 'react-router-dom'
import styles from '../css/Tour.module.css'

function Tour({ tour }) {
  return (
    <Link to={`/tours/${tour.id}`} className={styles.tourContainer}>
      <img className={styles.tourImage} src={tour.image} alt={tour.title + ' Tour'} />
      <div className={styles.tourTexts}>
        <h2>{tour.title}</h2>
        <p className={styles.description}>{tour.description}</p>
      </div>
    </Link>
  )
}

export default Tour
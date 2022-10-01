import tours from '../assets/tours.json'
import styles from '../css/ToursCategoria.module.css'

import Tour from './Tour'

export function ToursCategoria() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tours</h1>
      {tours.map(tour => <div key={tour.id}><Tour tour={tour} /></div>)}
    </div>
  )
}
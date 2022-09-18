import tours from '../assets/tours.json'
import styles from '../css/ToursCat.module.css'

import Tour from './Tour'

function ToursCat() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tours</h1>
      {tours.map(tour => <div key={tour.id}><Tour tour={tour} /></div>)}
    </div>
  )
}

export default ToursCat
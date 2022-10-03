import tours from '../assets/tours.json'
import styles from '../css/ToursCategoria.module.css'
import restarurantes from '../assets/restaurantes.json'
import Restaurante from './Restaurante'

import Tour from './Tour'

export function ToursCategoria() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tours</h1>
      {tours.map(tour => <div key={tour.id}><Tour tour={tour} /></div>)}
    </div>
  )
}

export const RestaurantesCategorias = () => {
  return (
    <div>
      <h1>Restaurantes</h1>
      {restarurantes.map(resta => <div key={restarurantes.id}><Restaurante data={resta} /></div>)}
    </div>
  )
} 
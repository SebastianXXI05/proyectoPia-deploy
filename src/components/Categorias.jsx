import toursJson from '../assets/tours.json'
import styles from '../css/ToursCategoria.module.css'
import restarurantesJson from '../assets/restaurantes.json'
import hotelesJson from '../assets/hoteles.json'

//Componentes
import Tour from './Tour'
import Restaurante from './Restaurante'
import Hotel from './Hotel'
import Filtrar from './Filtrar'

export function ToursCategoria() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tours</h1>
      {toursJson.map(tour => <div key={tour.id}><Tour tour={tour} /></div>)}
    </div>
  )
}

export const RestaurantesCategorias = () => {
  return (
    <div className={styles.container}>
      <Filtrar />
      <div className={styles.container__result}>
        <h1 className={styles.title}>Restaurantes</h1>
        {restarurantesJson.map(resta => <div key={resta.id}><Restaurante data={resta} /></div>)}
      </div>
    </div>
  )
} 

export const HotelesCategorias = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hoteles</h1>
      {hotelesJson.map(data => <div key={data.id}><Hotel data={data} /></div>)}
    </div>
  )
}
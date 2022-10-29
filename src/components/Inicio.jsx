import { Link } from 'react-router-dom'
import styles from '../css/Inicio.module.css'
import tours from '../assets/tours.json'
import restauranteDate from '../assets/restaurantes.json'
import hotelData from '../assets/hoteles.json'

import Restaurante from './Restaurante'
import Tour from './Tour'
import Hotel from './Hotel'

function Inicio() {
  return (
    <main>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>CONOCE LA COMUNA 13</h1>
          <div className={styles.content__link}>
            <Link className={styles.link} to='/inicio'>Comenzar</Link>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>Conoce a través de Tours:</h2>
        <Tour tour={tours[0]} />
        <Tour tour={tours[1]} />

        <h2 className={styles.subtitle}>Encuentra Restaurantes: </h2>
        <Restaurante data={restauranteDate[0]} />
        <Restaurante data={restauranteDate[3]} />

        <h2 className={styles.subtitle}>Encuentra Hoteles: </h2>
        <Hotel data={hotelData[0]} />
        <Hotel data={hotelData[1]} />
      </div>
    </main>
  )
}

export default Inicio
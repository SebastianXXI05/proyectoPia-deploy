import { Link } from 'react-router-dom'
import styles from '../css/Inicio.module.css'
import tours from '../assets/tours.json'
import restauranteDate from '../assets/restaurantes.json'

import Restaurante from './Restaurante'
import Tour from './Tour'

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
        <h2 className={styles.subtitle}>Conoce a través de tours:</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam beatae, impedit distinctio aut illum suscipit maxime, reprehenderit pariatur, sit nesciunt laborum officia fugiat eveniet! Voluptatem inventore voluptate hic itaque rem!
        </p>
        <Tour tour={tours[0]} />
        <Tour tour={tours[1]} />

        <h2 className={styles.subtitle}>Restaurantes</h2>
        <Restaurante data={restauranteDate[0]} />
      </div>
    </main>
  )
}

export default Inicio
import styles from '../css/PanelControl.module.css'
import tourJson from '../assets/tours.json'
import restauranteJSON from '../assets/restaurantes.json'
import hotelesJson from '../assets/hoteles.json'

// Componentes
import Tour from './Tour'
import Restaurante from './Restaurante'
import Hotel from './Hotel'

function PanelControl() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <h2 className={styles.title}>Recomendaciones</h2>
        <ul className={styles.ul}>
          <li className={styles.items}>lleva una botella de agua</li>
          <li className={styles.items}>lleva un paraguas o una carpa para los dias lluvioso</li>
          <li className={styles.items}>no te salgas de tu grupo</li>
          <li className={styles.items}>evita el contatcto con extraños</li>
          <li className={styles.items}>lleva proteccion</li>
          <li className={styles.items}>no compres productos sospechosos</li>
          <li className={styles.items}>Lleva ropa comoda</li>
        </ul>
        <h2 className={styles.title}>Tours Destacados</h2>
        <Tour tour={tourJson[0]} />
        <Tour tour={tourJson[1]} />

        <h2 className={styles.title}>Mejores Restaurantes</h2>
        <Restaurante data={restauranteJSON[0]} />
        <Restaurante data={restauranteJSON[1]} />

        <h2 className={styles.title}>Hoteles Destacados</h2>
        <Hotel data={hotelesJson[0]} />
        <Hotel data={hotelesJson[1]} />
      </div>
    </div>
  )
}

export default PanelControl
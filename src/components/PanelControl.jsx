import BuscarAlgo from './BuscarAlgo'
import styles from '../css/PanelControl.module.css'

function PanelControl() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BUSCA ALGO:</h1>
      <BuscarAlgo className={styles.input} />
    </div>
  )
}

export default PanelControl
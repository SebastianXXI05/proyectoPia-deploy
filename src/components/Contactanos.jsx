import styles from '../css/Contactanos.module.css'
function Contactanos() {
  return (
    <div className={styles.container}>
      <h1>Contactanos</h1>
      <p>A continuación podras encontrar las redes sociales en las que podrdas informarte acerca de nuestra pagina web y la información más importante que podras encontrar</p>

      <div>
        <h2>Redes Sociales</h2>
        <ul>
          <li><a href="#">facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twiter</a></li>
        </ul>
      </div>

      <div>
        <h3>contactanos de una manera más privada</h3>
        <p>Mediante Whattsapp: **********</p>
        <p>Mediante gmail: <a href="#">ederquiros5@gmail.com</a></p>
      </div>


    </div>
  )
}

export default Contactanos
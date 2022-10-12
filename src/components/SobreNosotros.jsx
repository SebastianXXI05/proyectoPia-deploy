import styles from '../css/SobreNosotros.module.css'
function SobreNosotros() {
    return (
        <div className={styles.container}>
            <h1>¿Quienes somos?</h1>
            <p>Obten información relevante acerca de como contactar a los creadores de 
              "Conoce la comuna 13" y nuestas redes sociales en las q puedes seguirnos y obtener información de nuevos destinos</p>
              <div>
                <h1>Acerca de nuestra visión.</h1>
                <p>Nuestro objtivo es tener una gran participación informativa acerca de todo lo que la comuna 13 puede ofecerle a los turistas que deseen disfrutar una grata experiencia.
                </p>
              </div>
              <div>
                <h1>Acerca de nuestra misión.</h1>
                <p>A futuro, tendremos un reconocimiento internacional debido a nuestra gran eficacia como una pagina web que ofrece un acercamiento a la cultura e historia de la comuna trece, 
                  como una comunidad informativa nuestro deber será informar profundamente acerca de todos los lugares que ofrece la comuna 13 y que resultarán siendo atractivos para los turistas. </p>
              </div>
        </div>
      
    )
}

export default SobreNosotros
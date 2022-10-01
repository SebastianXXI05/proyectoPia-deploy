import { Routes, Link, Route, useParams } from 'react-router-dom'
import { AiOutlineMenuFold } from 'react-icons/ai'
import styles from './App.module.css'
import { useState } from 'react'

// COMPONENTES
import Inicio from './components/Inicio'
import PanelControl from './components/PanelControl'
import { ToursCategoria } from './components/Categorias'
import { TourDetalle } from './components/Detalles'
import SobreNosotros from './components/SobreNosotros'

function App() {
  const [menu, setMenu] = useState(false)
  const idHeader = 'up'
  const activateMenu = () => setMenu(!menu)

  return (
    <>
      {/* header terminado */}
      <header className={styles.header}>
        <div className={styles.container}>
        <Link id={idHeader} to='/' onClick={menu ? activateMenu : null} className={styles.title}>CN 13</Link>
          <nav className={styles.nav}
          style={menu ? {top: '80px'} : {top: '-100%'}}
          >
            <ul className={styles.nav__items}>
              <li className={styles.nav__item}><Link onClick={activateMenu} to='/inicio'>Inicio</Link></li>
              <li className={styles.nav__item}><Link onClick={activateMenu} to='/nosotros'>Sobre Nosotros</Link></li>
              <li className={styles.nav__item}><Link onClick={activateMenu} to=''>Contactanos</Link></li>
              <li className={styles.nav__item}><Link onClick={activateMenu} to=''>Video</Link></li>
              <li className={styles.nav__item}>
                <details className={styles.summary}>
                  <summary>Categorias</summary>
                  <div className={styles.summary__items}>
                    <Link onClick={activateMenu} to='/tours'>Tours</Link>
                    <Link onClick={activateMenu} to=''>Restaurantes</Link>
                    <Link onClick={activateMenu} to=''>Hoteles</Link>
                  </div>
                </details>
              </li>
            </ul>
          </nav>
          <button 
          className={styles.btn}
          onClick={activateMenu}
          >
            <AiOutlineMenuFold className={styles.menu} />
          </button>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<PanelControl />} />
        <Route path='/tours' element={<ToursCategoria />}/>
        <Route path='/tours/:id' element={<TourDetalle />} />
        <Route path='/nosotros' element={<SobreNosotros />} />
      </Routes>
    </>
  )
}

export default App

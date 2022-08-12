
import Fomulario from './components/Fomulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import { Container } from 'react-bootstrap'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'

function App() {

    return (
      <CategoriasProvider>
        <BebidasProvider>
          <header className = "py-5">
            <h1>Buscador de Bebidas</h1>
          </header>

          <Container className = 'mt-5'>
            <Fomulario />

            <ListadoBebidas />

            <ModalBebida />
          </Container>
        </BebidasProvider>
      </CategoriasProvider>
    )
}

export default App

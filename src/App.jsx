
import { Container } from 'react-bootstrap'
import Fomulario from './components/Fomulario'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'
import ListadoBebidas from './components/ListadoBebidas'

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
          </Container>
        </BebidasProvider>
      </CategoriasProvider>
    )
}

export default App

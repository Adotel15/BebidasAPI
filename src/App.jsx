
import { Container } from 'react-bootstrap'
import Fomulario from './components/Fomulario'
import { CategoriasProvider } from './context/CategoriasProvider'

function App() {

  return (
    <CategoriasProvider>
      <header className = "py-5">
        <h1>Buscador de Bebidas</h1>
      </header>

      <Container className = 'mt-5'>
        <Fomulario />
      </Container>
    </CategoriasProvider>
  )
}

export default App

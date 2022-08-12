
import { Container } from 'react-bootstrap'
import Fomulario from './components/Fomulario'

function App() {

  return (
    <>
      <header className = "py-5">
        <h1>Buscador de Bebidas</h1>
      </header>

      <Container className = 'mt-5'>
        <Fomulario />
      </Container>
    </>
  )
}

export default App

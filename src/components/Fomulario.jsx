
import { Button, Form, Row, Col } from 'react-bootstrap'

const Fomulario = () => {

    return (
        <Form>
            <Row>
                <Col md = {6}>
                    <Form.Group className = 'mb-3'>
                        <Form.Label htmlFor = 'nombre'>Nombre de la bebida</Form.Label>

                        <Form.Control 
                            type = "text"
                            placeholder = 'Ej: Tequila, Vodka...'
                            name = "nombre"
                        />
                    </Form.Group>
                </Col>

                <Col md = {6}>
                <Form.Group className = 'mb-3'>
                        <Form.Label htmlFor = 'categoria'>Categoria Bebida</Form.Label>

                        <Form.Select
                            id = 'categoria'
                            name = 'categoria'
                        >
                            <option>- Seleciona Categoria -</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default Fomulario

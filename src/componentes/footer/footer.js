import {Container,Col} from "react-bootstrap"
import "./footer.css"


const Footer=()=>{
    return(

        <footer>
            <Container className="colornegro bg-darck">
                <Col >
                <p>Author: ABaduna</p>
                <p><a href="mailto:hege@example.com">correo@example.com</a></p>
                </Col>
                <Col >
                    <p>Lorem</p>
                </Col>
                <Col >
                    <h3>Contacto</h3>
                    <p>San lorenzo 1234 pepito</p>

                </Col>
            </Container>
        </footer>
        
    )
}

export default Footer
import {Container,Nav,Navbar} from "react-bootstrap"


const navbar=()=>{
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Formulario por ABaduna</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Formulario</Nav.Link>
  

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default navbar
//nav bar with react bootstrap
import { Button, Container, Nav,  Navbar, NavDropdown, FormControl , Form } from "react-bootstrap";
import "./navbar.css"


function CustomNavBar() {
    return (

<Navbar bg="light" expand="xl" sticky="top" >
  <Container fluid>
    <Navbar.Brand href="#"><b>Tinkerhub Gecw</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Resources</Nav.Link>
        <Nav.Link href="#action2">Gallery</Nav.Link>
        <NavDropdown title="Commitee  " id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Technical</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Creative</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Outreach</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
          Volunteer call
          
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
       
        </Nav.Link>
      </Nav>
      <Nav.Link href="#action2"><b>Opensource</b></Nav.Link>
      <Nav.Link href="#action2"><b>Github</b></Nav.Link>
     
        <Button variant="outline-primary"><b>JOIN US</b></Button>
    </Navbar.Collapse>
  </Container>
</Navbar>

    );
}
export default CustomNavBar;
//nav bar with react bootstrap
import { Button, Container, Nav,  Navbar, NavDropdown } from "react-bootstrap";
import "./navbar.css"


function CustomNavBar() {
    return (

<Navbar bg="dark" expand="xl" >
  <Container fluid>
    <Navbar.Brand href="#"><b>Tinkerhub Gecw</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
        <Nav.Link href="#action1" style={{color:"white"}}>Home</Nav.Link>
        <Nav.Link href="#action2"style={{color:"white"}}>Resources</Nav.Link>
        <Nav.Link href="#action2"style={{color:"white"}}>Gallery</Nav.Link>
        <NavDropdown title="Committee  " id="navbarScrollingDropdown" >
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
      <Nav.Link href="#action2" ><b>Opensource</b></Nav.Link>
      <Nav.Link href="#action2"><b>Github</b></Nav.Link>
     
        <Button variant="outline-primary"><b>JOIN US</b></Button>
    </Navbar.Collapse>
  </Container>
</Navbar>

    );
}
export default CustomNavBar;
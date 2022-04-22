import { Navbar, Container, Nav } from "react-bootstrap";
import './css/navbar.css'
import logo from "../assets/logo.png"
const navbar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="transparent" variant="light" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="logo"
            className=" d-none d-lg-block"
            width="10%"
            height="auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="text-center">
            
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/teams">Organizers</Nav.Link>
              <Nav.Link href="/events">Schedule</Nav.Link>
              <Nav.Link href="/#about">Badge</Nav.Link>
              <Nav.Link href="/feed">FAQ</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
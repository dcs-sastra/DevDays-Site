import { Navbar, Container, Nav } from 'react-bootstrap';
import './css/navbar.css';
import logo from '../assets/Devdays Logo.svg';

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand='md' bg='transparent' variant='light' className='navbar'>
      <Container>
        <div className='d-flex w-100 justify-content-between align-items-center'>
          <Navbar.Brand href='#home'>
            <img src={logo} alt='logo' className='d-block px-2' id='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        </div>
        <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-center'>
          <Nav className='text-center'>
            <Nav.Link href='/' className='p-2 hclass'>
              Home
            </Nav.Link>
            <Nav.Link href='/#schedule' className='p-2'>
              Schedule
            </Nav.Link>
            <Nav.Link href='/#faq' className='p-2'>
              FAQ
            </Nav.Link>
            <Nav.Link href='/#contact' className='p-2'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

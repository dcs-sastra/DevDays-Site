import { Navbar, Container, Nav } from 'react-bootstrap';
import './css/navbar.css';
import logo from '../assets/Devdays Logo.svg';
const navbar = () => {
  return (
    <Navbar collapseOnSelect expand='md' bg='transparent' variant='light' className='navbar'>
      <Container className=''>
        <div className='d-flex justify-content-between w-100'>
          <Navbar.Brand href='#home'>
            <img src={logo} alt='logo' className=' d-block d-md-block mt-3 px-2' id='logo' height='auto' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='text-center'>
              <div className='p-2'>
                {' '}
                <Nav.Link href='/' className='hclass'>
                  Home
                </Nav.Link>
              </div>
              <div className='p-2'>
                {' '}
                <Nav.Link href='/#schedule'>Schedule</Nav.Link>
              </div>
              {/* <div className="p-2"> <Nav.Link href="/#badge">Badge</Nav.Link></div> */}
              <div className='p-2'>
                {' '}
                <Nav.Link href='/#faq'>FAQ</Nav.Link>
              </div>
              <div className='p-2'>
                {' '}
                <Nav.Link href='/#contact'>Contact</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default navbar;

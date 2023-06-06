import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const getUserArr = localStorage.getItem('user_login');
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">User Registration</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Link to='/' className='nav-link'>Signup</Link> */}
                        {getUserArr ? (
                            <Link to='/details' className='nav-link'>Details</Link>
                        ) : (
                            <Link to='/login' className='nav-link'>Login</Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
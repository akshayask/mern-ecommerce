import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

const Header = () => {
  return (
   <header>
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">
                <img className="brandlogo px-0.5 " src="https://cdn-icons-png.flaticon.com/512/5968/5968965.png" alt="" srcset="" />
                shopify</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <Nav.Link href='/cart'><FaShoppingCart></FaShoppingCart> Cart</Nav.Link>
                    <Nav.Link href='/login'><FaUser></FaUser> Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
   </header>
  )
}

export default Header
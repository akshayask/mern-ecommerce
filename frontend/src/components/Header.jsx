import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import {LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
   <header>
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
            <LinkContainer to={'/'}>
            <Navbar.Brand>
                <img className="brandlogo px-0.5 " src="https://cdn-icons-png.flaticon.com/512/5968/5968965.png" alt="" srcset="" />
                shopify</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <LinkContainer to={'/cart'}><Nav.Link ><FaShoppingCart></FaShoppingCart> Cart</Nav.Link></LinkContainer>
                    <LinkContainer to={'/login'}><Nav.Link ><FaUser></FaUser> Login</Nav.Link></LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
   </header>
  )
}

export default Header
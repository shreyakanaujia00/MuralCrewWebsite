import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Logo from './mcMerchSize.png'

class Menu extends Component {
    render () {
        return (
            <Navbar bg="light" variant="primary" className="Menu">
                <Navbar.Brand href="/"  className="Menu-Logo">
                    <img
                    src={Logo}
                    width="50"
                    height="50"
                    object-fit="contain"
                    />{' '}
                LHS Mural Crew
                </Navbar.Brand>
                <Nav className="justify-content-center Menu-Options">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Progress" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/octopusMural">Octopus Mural</NavDropdown.Item>
                        <NavDropdown.Item href="/planetMural">Planet Mural</NavDropdown.Item>
                        <NavDropdown.Item href="/springMural">Spring Mural</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
        </Navbar>
        )
    }
}

export default Menu;
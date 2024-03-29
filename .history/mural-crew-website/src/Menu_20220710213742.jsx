import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

class Menu extends Component {
    render () {
        return (
            <Navbar bg="light" variant="light">
            <Nav>
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
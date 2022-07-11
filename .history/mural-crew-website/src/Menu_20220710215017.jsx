import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Logo from './mcMerch.png'

class Menu extends Component {
    render () {
        return (
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    src={Logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    />{' '}
                LHS Mural Crew
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Progress" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/octopusMural">Octopus Mural</NavDropdown.Item>
                        <NavDropdown.Item href="/planetMural">Planet Mural</NavDropdown.Item>
                        <NavDropdown.Item href="/springMural">Spring Mural</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        )
    }
}

export default Menu;
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Logo from './logo.png'

class Menu extends Component {
    render () {
        return (
            <Navbar className="Menu">
                <Navbar.Brand href="/" className="Menu-Logo">
                    <img
                    src={Logo}
                    width="65"
                    height="65"
                    object-fit="contain"
                    />{' '}
                LHS Mural Crew
                </Navbar.Brand>
                <Nav className="justify-content-center Menu-Options">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <NavDropdown title="Murals" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/Murals/AWalkinthePark">A Walk in the Park</NavDropdown.Item>
                        <NavDropdown.Item href="/Murals/TheCreationofScience">The Creation of Science</NavDropdown.Item>
                        <NavDropdown.Item href="/Murals/IntheGreatDeep">In the Great Deep</NavDropdown.Item>
                        <NavDropdown.Item href="/Murals/LetTheBeautyOfWhatYouLoveBeWhatYouDo">Let The Beauty Of What You Love Be What You Do</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/Process">Process</Nav.Link>
                    <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Menu;
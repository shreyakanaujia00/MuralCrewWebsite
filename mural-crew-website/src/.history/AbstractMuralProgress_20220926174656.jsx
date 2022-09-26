import React, { Component } from 'react';
import { Image, Alert, Carousel } from 'react-bootstrap';

import AbstractMural from './Images/Abstract0.jpeg'

class AbstractMuralProgress extends Component {
    render () {
        return (
            <div>
            <h1 className="Title">Not Yet Named!</h1>
                <Carousel className="Gallery">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={AbstractMural}
                    alt="First slide"
                    />
                </Carousel.Item>
                </Carousel>
                <Alert variant="dark" className='description'>
                    <Alert.Heading>Not Yet Named</Alert.Heading>
                    <p>
                    “Here is a sneak peak of our future mural. Thank you Ananya Katyal for creating a beautiful design!
                    </p>
                </Alert>
            </div>
        )
    }
}

export default AbstractMuralProgress;
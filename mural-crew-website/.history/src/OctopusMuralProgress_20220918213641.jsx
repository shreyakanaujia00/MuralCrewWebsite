import React, { Component } from 'react';
import { Image, Alert, Carousel } from 'react-bootstrap';

import OctopusMural from './Octopus Mural.jpeg'

class OctopusMuralProgress extends Component {
    render () {
        return (
            <div>
            <h1 className="Title">In the Great Deep</h1>
                <Carousel className="Gallery">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={OctopusMural}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={OctopusMural}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={OctopusMural}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
                <Alert variant="success" className='description'>
                    <Alert.Heading>In the Great Deep</Alert.Heading>
                    <p>
                    “In the Great Deep” was the crew’s first official mural. After a month-long design process, including group critiques and discussions, Katie Yang’s octopus design was chosen. To tie into the subjects taught in the science building, the mural was inspired by the theme of the ocean, centering an octopus. The main challenge with the piece was that it required a lot of detailed texture and blending but through trial and error, the crew was able to adapt and overcome it. It was painted throughout the month of December in 2021.
                    </p>
                </Alert>
            </div>
        )
    }
}

export default OctopusMuralProgress;
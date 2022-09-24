import React, { Component } from 'react';
import { Carousel, Alert } from 'react-bootstrap';

import HandMural from './Hand Mural.jpg'
import OctopusMural from './Octopus Mural.jpeg'

class HandMuralProgress extends Component {
    render () {
        return (
            <div>
            <h1 className="Title">The Creation of Science</h1>
            <Carousel className="Gallery">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={HandMural}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={HandMural}
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
                <Alert variant="dark" className='description'>
                    <Alert.Heading>The Creation of Science</Alert.Heading>
                    <p>
                    “The Creation of Science” is located on the second floor of the Lexington High School science building. It is designed by Shreya Kanaujia. The mural is inspired by the famous historical painting, The Creation of Adam by Michelangelo, with the aim to intertwine two science fields that are taught throughout the building. The design focuses on two hands reaching to each other above a contrasting background of space and nature. The crew started on this piece in late January of 2022 with the challenge of painting on a textured porous wall. Despite the complications, the crew finished “The Creation of Science” in late April.
                    </p>
                </Alert>
            </div>
        )
    }
}

export default HandMuralProgress;
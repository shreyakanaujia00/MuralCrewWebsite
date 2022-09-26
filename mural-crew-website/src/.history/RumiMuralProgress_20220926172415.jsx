import React, { Component } from 'react';
import { Image, Alert, Carousel } from 'react-bootstrap';

import RumiMural from './Images/Rumi0.jpg'
import Rumi1 from './Images/Rumi1.jpg'

class RumiMuralProgress extends Component {
    render () {
        return (
            <div>
            <h1 className="Title">"Let the Beauty of What You Love Be What You Do"</h1>
                <Carousel className="Gallery">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={RumiMural}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-50%"
                    src={Rumi1} style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}
                    alt="Second slide"
                    />
                </Carousel.Item>
                </Carousel>
                <Alert variant="dark" className='description'>
                    <Alert.Heading>"Let the Beauty of What You Love Be What You Do"</Alert.Heading>
                    <p>
                    “Let the beauty of what you love be what you do” is a famous quote by the Sufi poet Rumi. This name reflects the mural created and the beauty of both the creation and final product of the mural. The mural demonstrates Chinese-inspired mountains, valleys, and houses centering three Arabic calligraphy panels. Rumi’s quote “listen with ears of tolerance, see through the eyes of compassion, speak with the language of love” is written in the panels. On the left side, a Chinese quote from Confucious states “Education breeds confidence. Confidence breeds hope. Hope breeds peace." This, and the far extremes of the mural, were freehanded by Tasneem Ghadiali as the original designs did not account for the full length of the wall.  This mural was not organized by the Crew, but the Lexington High School Senate. However, the design was created by Tasneem Ghadiali with input from Atreyi Basu, and painted with Jessica Laman (among others). This mural was the first step in inspiring the Mural Crew!
                    </p>
                </Alert>
            </div>
        )
    }
}

export default RumiMuralProgress;
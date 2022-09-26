import React, { Component } from 'react';
import { Carousel, Alert } from 'react-bootstrap';

import SpringMural from './Images/Spring0.jpg'
import Spring1 from './Images/Spring1.jpg'
import Spring2 from './Images/Spring2.jpg'
import Spring3 from './Images/Spring3.jpg'

class SpringMuralProgress extends Component {
    render () {
        return (
            <div>
            <h1 className="Title">A Walk in the Park</h1>
                <Carousel className="Gallery">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={SpringMural}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Spring1}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Spring2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Spring3}
                    alt="Fourth slide"
                    />
                </Carousel.Item>
                </Carousel>
                <Alert variant="dark" className='description'>
                    <Alert.Heading>A Walk in the Park</Alert.Heading>
                    <p>
                    “A Walk in the Park” is located outside the Nurse's Room. It was designed by Jessica Laman and it is the crew’s first outdoor mural! The mural contains scenes from New England nature, such as a monarch butterfly, beautiful flowers, a boy cycling, and a girl enjoying nature. A globe on the far left symbolizes that this scene is only a tiny part of the nature that envelops the entire world. To paint this, the crew freehanded the entire design on brick with sharpie, then used an outdoor primer. After priming, they used outdoor latex paint. The mural was started and finished in a span of only three weeks, finishing on the last day of school in 2022.
                    </p>
                </Alert>
            </div>
        )
    }
}

export default SpringMuralProgress;
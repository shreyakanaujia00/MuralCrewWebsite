import React, { Component } from 'react';
import { Image, Alert } from 'react-bootstrap';
import InstaLogo from './insta logo.png'

class Process extends Component {
    render () {
        return (
            <div>
            <h1 className="Title-thin">How a Mural is Made</h1>
                <Alert variant="success" className='description'>
                    <Alert.Heading>1. Designing</Alert.Heading>
                    <p align="left">
                    a. Murals are designed individually by members of the crew. The crew members will start by scouting potential locations for murals around the school & community. Usually, the mural is based on the space it is painted in, so leaders will inform crew members where the final location of the mural will be and the design process will begin. <br />
                    b. Feedback and critique sessions occur around a week after the designs are submitted. The designs are revised and either a voting process or leaders’ decision will choose the final design. <br />
                    c. Designs can be both digital or hand drawn, but must ultimately become digital to help with tracing. <br />
                    </p>
                    <Alert.Heading>2. Base Coat</Alert.Heading>
                    <p align="left">
                    a. Most walls need a base coat of white paint to let the vibrancy of the paint colors shine through. <br />
                    b. Outdoor murals need a primer so that paint will not erode and fall off. <br />
                    c. Mural Crew is committed to making murals that last, so we prime most walls and pick walls that are conducive to painting. <br />
                    d. We also tape the edges of the mural and lay tarps on the floor. <br />
                    </p>
                    <Alert.Heading>3. Tracing</Alert.Heading>
                    <p align="left">
                    a. The crew uses a projector to project the design onto the wall. We will trace the main features of the mural with a sharpie to serve as a guide while painting. For the most recent outdoor mural, the design was freehanded, and many parts of the Rumi mural were also freehanded, so this step is not necessary but is helpful for those less familiar with the design and newer crew members. <br />
                    </p>
                    <Alert.Heading>4. Painting</Alert.Heading>
                    <p align="left">
                    a. Now we paint! We paint using Behr wall paint or Benjamin-Moore Wall paint. Our supplies are funded by generous grants from the Lexington High School Parent Teacher Organization. <br />
                    b. We begin by filling large blocks of color, then shading, and finally completing the fine details. <br />
                    c. This is the last step and the longest step of the mural painting process. <br />
                    </p>
                </Alert>
            </div>
        )
    }
}

export default Process;
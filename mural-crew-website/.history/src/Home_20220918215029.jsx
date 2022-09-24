import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import OctopusMural from './Octopus Mural.jpeg'
import HandMural from './Hand Mural.jpg'
import SpringMural from './Spring Mural.jpg'

class Home extends Component {
    render () {
        return (
            <div>
            <h1 className="Title">LHS Mural Crew Gallery</h1>
                <Card className="card">
                    <Card.Img variant="top" src={OctopusMural} />
                    <Card.Body>
                        <Card.Title>In the Great Deep</Card.Title>
                        <Card.Text>
                        Located in the LHS Science Mods.
                        </Card.Text>
                        <Button variant="outline-info" href="/Progress/OctopusMural">See mural details here</Button>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={HandMural} />
                    <Card.Body>
                        <Card.Title>The Creation of Space</Card.Title>
                        <Card.Text>
                        Located in the LHS Science Building.
                        </Card.Text>
                        <Button variant="outline-info" href="/Progress/HandMural">See mural details here</Button>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={SpringMural} />
                    <Card.Body>
                        <Card.Title>A Walk in the Park</Card.Title>
                        <Card.Text>
                        Located outside the LHS Nurse's Room.
                        </Card.Text>
                        <Button variant="outline-info" href="/Progress/SpringMural">See mural details here</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Home;
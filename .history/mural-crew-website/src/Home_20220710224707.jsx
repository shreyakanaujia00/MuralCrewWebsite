import React, { Component } from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';

import OctopusMural from './Octopus Mural.jpeg'
import HandMural from './Hand Mural.jpg'
import SpringMural from './Spring Mural.jpg'

class Home extends Component {
    render () {
        return (
            <div className="background">
            <h1 className="Title">LHS Mural Crew Gallery</h1>
                <Card className="card">
                    <Card.Img variant="top" src={OctopusMural} />
                    <Card.Body>
                        <Card.Title>Octopus Mural</Card.Title>
                        <Card.Text>
                        Octopus Mural
                        </Card.Text>
                        <Button variant="primary">See more info here</Button>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={HandMural} />
                    <Card.Body>
                        <Card.Title>Octopus Mural</Card.Title>
                        <Card.Text>
                        Octopus Mural
                        </Card.Text>
                        <Button variant="light">See more info here</Button>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={SpringMural} />
                    <Card.Body>
                        <Card.Title>Octopus Mural</Card.Title>
                        <Card.Text>
                        Octopus Mural
                        </Card.Text>
                        <Button variant="primary">See more info here</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Home;
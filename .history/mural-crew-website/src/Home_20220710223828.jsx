import React, { Component } from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';

import OctopusMural from './Octopus Mural.jpeg'
import HandMural from './Hand Mural.jpg'
import SpringMural from './Spring Mural.jpg'

class Home extends Component {
    render () {
        return (
            <>
            <h1 className="Title">LHS Mural Crew Gallery</h1>
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="card" variant="top" src={OctopusMural} />
                    <Card.Body>
                        <Card.Title>Octopus Mural</Card.Title>
                        <Card.Text>
                        Octopus Mural
                        </Card.Text>
                        <Button variant="primary">See more info here</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="card" variant="top" src={HandMural} />
                    <Card.Body>
                        <Card.Title>Octopus Mural</Card.Title>
                        <Card.Text>
                        Octopus Mural
                        </Card.Text>
                        <Button variant="primary">See more info here</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="card" variant="top" src={SpringMural} />
                    <Card.Body>
                        <Card.Title>Octopus Mural</Card.Title>
                        <Card.Text>
                        Octopus Mural
                        </Card.Text>
                        <Button variant="primary">See more info here</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            </>
        )
    }
}

export default Home;
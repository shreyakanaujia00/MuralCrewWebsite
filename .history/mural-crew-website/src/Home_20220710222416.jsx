import React, { Component } from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';

class Home extends Component {
    render () {
        return (
            <CardGroup>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Octopus Mural</Card.Title>
                    <Card.Text>
                    Octopus Mural
                    </Card.Text>
                    <Button variant="primary">See more info here</Button>
                </Card.Body>
            </Card>
            </CardGroup>
        )
    }
}

export default Home;
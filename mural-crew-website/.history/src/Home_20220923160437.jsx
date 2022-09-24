import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import OctopusMural from './Octopus Mural.jpeg'
import HandMural from './Hand Mural.jpg'
import SpringMural from './Spring Mural.jpg'
import RumiMural from './RumiMural.jpg'

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
                        <Button variant="outline-primary" href="/Murals/IntheGreatDeep">See mural details here</Button>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={HandMural} />
                    <Card.Body>
                        <Card.Title>The Creation of Space</Card.Title>
                        <Card.Text>
                        Located in the LHS Science Building.
                        </Card.Text>
                        <Button variant="outline-primary" href="/Murals/TheCreationofScience">See mural details here</Button>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={SpringMural} />
                    <Card.Body>
                        <Card.Title>A Walk in the Park</Card.Title>
                        <Card.Text>
                        Located outside the LHS Nurse's Room.
                        </Card.Text>
                        <Button variant="outline-primary" href="/Murals/AWalkinthePark">See mural details here</Button>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={RumiMural} />
                    <Card.Body>
                        <Card.Title>Let The Beauty Of What You Love Be What You Do</Card.Title>
                        <Card.Text>
                        Located in the LHS English Mods.
                        </Card.Text>
                        <Button variant="outline-primary" href="/Murals/LetTheBeautyOfWhatYouLoveBeWhatYouDo">See mural details here</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Home;
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import OctopusMural from './Images/Octopus0.jpeg'
import HandMural from './Images/Hand0.jpg'
import SpringMural from './Images/Spring0.jpg'
import RumiMural from './Images/Rumi0.jpg'
import AbstractMural from './Images/Abstract0.jpg'

class Home extends Component {
    render () {
        return (
            <div /*className='Home'*/>
            <h1 className="Title">LHS Mural Crew Gallery</h1>
            <Card className="card">
                    <Card.Img variant="top" src={AbstractMural} />
                    <Card.Body>
                        <Card.Title>Sneak Peak: Not Yet Named!</Card.Title>
                        <Card.Text>
                        Not yet painted, but here's the design! Will be painted in the LHS World Language Building.
                        </Card.Text>
                        <Button variant="outline-primary" href="/Murals/FutureMural">See mural details here</Button>
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
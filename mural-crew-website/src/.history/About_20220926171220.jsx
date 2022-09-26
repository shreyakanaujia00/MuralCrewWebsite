import React, { Component } from 'react';
import { Image, Alert } from 'react-bootstrap';
import Logo from './Images/mcMerchSize.png'

class About extends Component {
    render () {
        return (
            <div>
            <h1 className="Title">About the LHS Mural Crew</h1>
                <Image className="aboutLogo" src={Logo} />
                <Alert variant = 'dark' className='description'>
                    <Alert.Heading>About Us</Alert.Heading>
                    <p>
                    Atreyi Basu - President & Founder <br />
                    Tasneem Ghadiali - President & Founder <br />
                    Shreya Kanaujia - Vice President <br /> <br />
                    Mural Crew was founded in September of 2021 by Atreyi Basu, Jessica Laman, and Tasneem Ghadiali. After the summer mural project was completed with the Lexington High School Senate, the three decided they should create a permanent mural crew at LHS. Tasneem had designed the mural with Atreyi’s input and the three of them (among others!) painted it in August. What once began just as a thought quickly sprung into reality as they found an advisor, hosted a booth at the activities fair, and held their first meeting on October 8th. Thus began a cycle of designing, feedback, and painting in a welcoming and fun community. Mural Crew prides itself on its strong sense of dedication, hard work, and its stress-free environment. <br /> <br />
                    In the first year of Mural Crew’s existence, three murals were completed: two in the science building and one outdoors. Jessica Laman, a former senior at LHS, graduated and is now attending Boston University. Shreya Kanaujia, a member of Mural Crew from the start, joined as Vice President at the end of 2021. The Mural Crew would like to thank the LHS PTO for funding our supplies.
                    </p>
                </Alert>
            </div>
        )
    }
}

export default About;
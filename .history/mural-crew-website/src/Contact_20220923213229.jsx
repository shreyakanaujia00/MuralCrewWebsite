import React, { Component } from 'react';
import { Image, Alert } from 'react-bootstrap';
import InstaLogo from './insta logo.png'

class Contact extends Component {
    render () {
        return (
            <div>
            <h1 className="Title-thin">Contact the LHS Mural Crew</h1>
                <Alert variant="dark" className='description'>
                    <Alert.Heading>Contact Us</Alert.Heading>
                    <p>
                    Atreyi Basu - President & Founder <br />
                    Tasneem Ghadiali - President & Founder <br />
                    Shreya Kanaujia - Vice President <br />
                    </p>
                    <p>
                    Please reach out to us through the Mural Crew email at <a href="mailto:lhsmuralcrew@gmail.com">lhsmuralcrew@gmail.com</a>. Or check us out on Instagram: <Image style={{width: "1.7%"}} src={InstaLogo}></Image> <a href='https://www.instagram.com/lhsmuralcrew'>@lhsmuralcrew</a> <br /><br />
                    If you have any suggestions for places we should paint or feedback for the website, let us know here! <a href = "https://forms.gle/nsLJ3RRcc2Ey7fzMA">Google Form</a>

                    </p>
                </Alert>
            </div>
        )
    }
}

export default Contact;
import React, {Component} from "react";
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.css';

import dog from '../assets/dogc.jpg'
import image from '../assets/homw1.png'
import reg from '../assets/register.png'
import login from '../assets/login.png'
import survey from '../assets/surveypage.jpg'

import {resetID, resetUsername, Userlogout} from "../components/CurrentUser";
import {register} from "../api";
import {Redirect} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '',
            userType: '',
            redirectState: false
        };
    }


    render() {
        if (this.state.redirectState === true) {
            return <Redirect to={this.state.path}/>
        }


        return (
            <div className={"home-body"}>
                <h1>Welcome to Animal Shapes!</h1>
                <Container fluid className={"home-container"}>
                    <Row className={"mx-auto"}>
                        <Col sm={6} className={"home-header"}>
                            <h1 className={"home-h1"}>Community Animal Feedback System</h1>
                            <h5>Animal Shapes seeks to understand what features people consider ideal in dogs. You can help researchers by sharing your thoughts online here.</h5>
                        </Col>
                        <Image className={"dog-logo"} src={dog} alt={"Logo"} fluid/>
                    </Row>
                </Container>
                <h2><b>Provide Feedback For These Cute Dogs.</b></h2>
          
                <img src={image} width="85%" alt={"logo"}/>
                <h2 className={"coreFeatures"}><b>About</b></h2>
                <div className={"home-h3"}>
                    <b>Purpose</b>
                </div>
                <div className={"features"}>
                    <h6>The purpose of this website is to gather information about which features people consider ideal in dogs. This will vary between different people based on their individual experiences and preferences. Researchers are interested in learning more about what people consider ideal in dogs to help develop evidence-based health and welfare education programs. </h6>

                </div>
                <div className={"home-h3"}>
                    <b>Method</b>
                </div>
                <div className={"features"}>
                    <h6>This website will ask you to rate some dog pictures based on what you consider to be ideal. It will also ask a little bit about you in terms of your experience to allow for data analysis. Your participation in this project is anonymous and your responses will not be able to be indentified after you have participated, and will only be analysed at the group level. If you have any questions or concerns about this project, you can email the research team at: yinank@unimelb.edu.au.</h6>

                </div>


                <div className={"home-h3"}>
                    <h2 className={"coreFeatures"}><b>Guideline</b></h2>
                    <div className="pics5">
                        <div id="status3_pics">
                            <ul className="pics6_status3">

                                <li>
                                    <Image className="status3-pic" src={reg} alt={"Logo"}/>
                                    <div><b>Step 1: Register</b></div>
                                </li>
                                <li>
                                    <Image className="status3-pic" src={login} alt={"Logo"}/>
                                    <div><b>Step 2: Log In</b></div>
                                </li>
                                <li>
                                    <Image crop="fill" width="85%" src={survey}/>
                                    <div><b>Step 3: Survey</b></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <h2><b>Thank you for choosing Animal Shapes</b></h2>
            </div>
        );
    }
}


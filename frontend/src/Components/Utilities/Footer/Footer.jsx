import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import platStore from '../../../images/playstore.png'
import appStore from '../../../images/Appstore.png'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className='footer'>
            <div className='divContainer'>
                <Row>
                    <Col lg='4' md='6' sm='12'>
                        <div className='foote_quick_apps'>
                            <p>
                                download our app
                                <br/>
                                <span>download app for android and <span>ios</span> mobile phone</span>
                            </p>
                            <div className='imgsAdd'>
                                <img src={platStore} alt='' />
                                <img src={appStore} alt='' />
                            </div>
                        </div>
                    </Col>
                    <Col lg='4' md='6' sm='12'>
                        <div className='logoCompany'>
                            <div className='logo'>
                                <h1>ecommerce.</h1>
                            </div>
                            <p className='footer_text'>
                                high Quality is our first priority
                            </p>
                            <p className='footer_text'>copyright &copy;{year} developed by muhammed mostafa.</p>
                        </div>
                    </Col>
                    <Col lg='4' md='6' sm='12'>
                        <div className='foote_quick_links'>
                            <h4>Pages</h4>
                            <div className='linksPages'>
                                <p>home</p>
                                <p>products</p>
                                <p>cart</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer
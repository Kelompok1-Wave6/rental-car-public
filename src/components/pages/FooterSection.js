import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import './FooterSection.css'
import Facebook from '../asset/icon_facebook.svg'
import Instagram from '../asset/icon_instagram.svg'
import Twitter from '../asset/icon_twitter.svg'
import Mail from '../asset/icon_mail.svg'
import Twitch from '../asset/icon_twitch.svg'
import Logo from '../asset/logo.svg';


const FooterSection = () => {
  return (
    <footer>
      <section className="footer">
     <Container>
        <Row>
            <Col sm={3}>
                <div className="wrapper_col_1">
                    <h1 className='mb-3'>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h1>
                    <p className='mb-3'>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
            </Col>

            <Col sm={2}>
                <div className="wrapper_col_2">
                    <ul className="list">
                        <Nav.Link href="#ourServices" className='text-dark mb-3'>Our Services</Nav.Link>
                        <Nav.Link href="#whyUs" className='text-dark mb-3'>Why Us</Nav.Link>
                        <Nav.Link href="#testi" className='text-dark mb-3'>Testimonial</Nav.Link>
                        <Nav.Link href="#faq" className='text-dark mb-3'>FAQ</Nav.Link>
                    </ul>
                    
                </div>
            </Col>

            <Col sm={3}>
                <div className="wrapper_col_3">
                    <h1>Connect with us</h1>
                        <img src={Facebook} alt="Facebook" />
                        <img className='ms-3' src={Instagram} alt="Instagram" />
                        <img className='ms-3' src={Twitter} alt="Twitter" />
                        <img className='ms-3' src={Mail} alt="Mail" />
                        <img className='ms-3' src={Twitch} alt="Twitch" />
                </div>
            </Col>

            <Col sm={3}>
                <div className="wrapper_col_4">
                    <h1>Copyright Binar 2022</h1>
                        <img src={Logo} alt="Logo" />
                </div>
            </Col>
            {/* <div className="col">
                <div className="footer_col_1">
                    <h1 className='mb-3'>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h1>
                    <p className='mb-3'>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
            </div>

            <div className="col">
                
            </div>

            <div className="col">

            </div>

            <div className="col">
            </div> */}
         </Row>

       </Container>
      </section>
    </footer>
  )
}

export default FooterSection
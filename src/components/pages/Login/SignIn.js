import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import Logokanan from '../../asset/Login/LogoKanan.png';
import LogoKiri from '../../asset/Login/LogoKiri.png';
import './Login.css';

const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/login', { email, password })
      .then((res) => {
        window.localStorage.setItem('access_token', res.data.access_token);
        window.localStorage.setItem('email_customer', res.data.email);
        window.location.href = '/carimobil';
      })
      .catch((e) => console.log(e))
  }

  return (

    <div className="login">
    <Container fluid>
      <Row>
        <Col className="login-kiri" sm={12} lg={6} xl={6}>
          <div className="login-box">
            <div className="login-konten">
              <div className="logo-login">
                <a href="/"><img src={LogoKiri} alt="BCR" className='homelogo' /></a>

              </div>
              <h1>Welcome Back!   </h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 email" controlId="formBasicEmail">
                  <Form.Label>
                    <h3>Email</h3>
                  </Form.Label>
                  <Form.Control type="email" placeholder="Contoh: johndee@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                 
                </Form.Group>
                <Form.Group className="mb-3 password" controlId="formBasicPassword">
                  <Form.Label>
                    <h3>Password</h3>
                  </Form.Label>
                  <Form.Control type="password" placeholder="6+ karakter"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    <h2>Sign In</h2>
                  </Button>
                </div>
              </Form>
              <div className="bawah-button">
                <h3>Don’t have an account?</h3>
                <h4>
                  <Link to="/sign-up" relative="path">
                    Sign Up for free
                  </Link>
                </h4>

              </div>
            </div>
          </div>
        </Col>
        <Col className="login-kanan" sm={0} lg={6} xl={6}>
          <img src={Logokanan} alt="Login" title='loginpage' />
        </Col>
      </Row>
    </Container>
  </div>

  )
}

export default SignIn
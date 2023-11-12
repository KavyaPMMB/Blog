import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import  axios from 'axios'

function Login() {
  const [Email, setemail] = useState('');
  const [Password, setpassword] = useState('');

  const isEmailValid = (email) => {
    const emailval = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailval.test(Email);
  };

  const isPasswordValid = (Password) => {
    return Password.length >= 8;
  };

  //const isFormValid = isEmailValid(Email) && isPasswordValid(Password);


  const handleSubmit = async(event) => {
    event.preventDefault();
    const display=await axios.post('http://localhost:4000/login',{Email,Password})
    console.log(display.data);

  };

  return (
    <Card className="border-secondary mx-auto mt-5" style={{ maxWidth: '500px',backgroundColor: '#f8f9fa'}}>
      <Card.Body className="d-flex flex-column align-items-left">
        <Card.Title className="text-center mb-4">LOGIN</Card.Title>
        <Form className="w-100">
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={Email} 
              onChange={(event) => setemail(event.target.value)} 
              required /* isInvalid={!isEmailValid(email)} */
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
            </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={Password} 
              onChange={(event) => setpassword(event.target.value)} 
              required /* isInvalid={!isPasswordValid(password)} */
            />
            <Form.Control.Feedback type="invalid">
              Password must be at least 8 characters long.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-4" onClick={handleSubmit} /*disabled={!isFormValid} */>
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Login;

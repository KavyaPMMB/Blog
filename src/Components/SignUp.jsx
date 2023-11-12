import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import  axios from 'axios'

function SignUp() {
  const [Name, setname] = useState("");
  const [Email, setemail] = useState("");
  const [Password, setpassword] = useState("")
  const [CnfmPassword, setcnfmpassword] = useState("")

  
  const handlename = (event) => {
    setname(event.target.value);
  };
  const handleemail = (event) => {
    setemail(event.target.value);
  };
  const handlePassword = (event) => {
    setpassword(event.target.value);
  };

  const handlecnfmPassword = (event) => {
    setcnfmpassword(event.target.value);
  };
  
  
  const isPasswordValid = (password) => {
    return password.length >= 8;
  };


  const handleSubmit = async(event) => {
    event.preventDefault();
    const display=await axios.post('http://localhost:4000/signup',{Name,Email,Password})
    console.log(display.data);
    // localStorage.setItem('userinfo',JSON.stringify(display.data))


  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        style={{ width: "500px", padding: "20px", backgroundColor: "#f8f9fa" }}
      >
        <Card.Title style={{ textAlign: "center" }}>
          <h2>SignUp</h2>
        </Card.Title>
        <Card.Body style={{ textAlign: "left" }}>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicname">
              <Form.Label>Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                value={Name}
                onChange={handlename}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicemail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Name"
                value={Email}
                onChange={handleemail}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={Password}
                onChange={handlePassword} /*isInvalid={!isPasswordValid(password)}*/
                required 
              />
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                placeholder=" Confirm your Password"
                value={Password}
                onChange={handlecnfmPassword} /*isInvalid={!isPasswordValid(password)}*/
                required 
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmit}
              style={{
                justifyContent: "center",
                display: "block",
                margin: "0 auto",
              }}
            >
              SignUp
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;

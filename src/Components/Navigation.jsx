import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className='nav1'>BlogBloomer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='nav'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='nav'>About</Nav.Link>
            <Nav.Link href="#pricing" className='nav'>Contact Us</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='nav'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='nav'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='nav'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
          <Link to="/signup">  <Nav.Link href="#deets" className='nav'>Sign Up</Nav.Link></Link>
           
           <Link to="/login"> <Nav.Link eventKey={2} href="#memes" className='nav'>
              Login
            </Nav.Link>
            </Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation
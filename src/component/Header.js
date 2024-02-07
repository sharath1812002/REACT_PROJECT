import React from 'react';
import{Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';

const Header = ()=>{
    return(
        <header>
       <Navbar  className="navbar-style" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
       <Image  className='logo-ing-style' src="images/logo.jpg" alt="VTU" roundedCircle/>
       <h6 className='logo-text-style'>Visvesvaraya Technological University,Bealagavi</h6>
       </Navbar.Brand>

       <Nav className="lr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <NavDropdown title="Academic" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Admission</NavDropdown.Item>
        <NavDropdown.Item href="#">Circulars & Nitification</NavDropdown.Item>
        <NavDropdown.Item href="#">Certificate Issused</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>

      <NavDropdown title="Examination" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Examination guidlines</NavDropdown.Item>
        <NavDropdown.Item href="#">Examinatipon Application</NavDropdown.Item>
        <NavDropdown.Item href="#">Result</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>

      <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Civil Engg</NavDropdown.Item>
        <NavDropdown.Item href="#">Computer Science Engg</NavDropdown.Item>
        <NavDropdown.Item href="#"> Electronics & Communication Engg</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>

      <NavDropdown title="Staff Login" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Login As Admin</NavDropdown.Item>
      
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>



    </Nav>

      </Container>
       </Navbar>
        </header>
    )
}
export default Header
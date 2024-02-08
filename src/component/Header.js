import React from 'react';
import{Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';
import{LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
        <header>
       <Navbar  className="navbar-style" expand="lg">
      <Container>
        <LinkContainer to='/'><Navbar.Brand href="#home">
       <Image  className='logo-ing-style' src="images/logo.jpg" alt="VTU" roundedCircle/>
       <h6 className='logo-text-style'>Visvesvaraya Technological University,Bealagavi</h6>
       </Navbar.Brand>
        </LinkContainer>
      

       <Nav className="lr-auto">
        <LinkContainer to='/'>
        <Nav.Link href="#home">Home</Nav.Link>
        </LinkContainer>
      
        <LinkContainer to='/about'>
        <Nav.Link href="#link">About Us</Nav.Link>
        </LinkContainer>
      
      
      <NavDropdown title="Academic" id="basic-nav-dropdown">
        <LinkContainer to='/admission'>
          <NavDropdown.Item href="#">Admission</NavDropdown.Item>
        </LinkContainer>

        <LinkContainer to='/circulars_notification'>  
         <NavDropdown.Item href="#">Circulars & Nitification</NavDropdown.Item>
         </LinkContainer>
       
         <LinkContainer to='/certificate_issused'>  
         <NavDropdown.Item href="#">Certificate Issused</NavDropdown.Item>
         </LinkContainer>

      
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>

      <NavDropdown title="Examination" id="basic-nav-dropdown">
        <LinkContainer to='/examination_guidlines'>
        <NavDropdown.Item href="#">Examination guidlines</NavDropdown.Item>
        </LinkContainer>

        <LinkContainer to='/exam_application'>
        <NavDropdown.Item href="#">Examinatipon Application</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to='/result'>
        <NavDropdown.Item href="#">Result</NavDropdown.Item>
        </LinkContainer>
        
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>

      <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
        <LinkContainer to='/civil-eng'>
        <NavDropdown.Item href="#">Civil Engg</NavDropdown.Item>
        </LinkContainer>
      
      <LinkContainer to='/cs_eng'>
      <NavDropdown.Item href="#">Computer Science Engg</NavDropdown.Item>
      </LinkContainer>

       <LinkContainer to='/ec_eng'>
       <NavDropdown.Item href="#"> Electronics & Communication Engg</NavDropdown.Item>
       </LinkContainer>
    
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>

      <NavDropdown title="Staff Login" id="basic-nav-dropdown">
        <LinkContainer to='/login_admin'>
        <NavDropdown.Item href="#">Login As Admin</NavDropdown.Item>
        </LinkContainer>
      
      
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
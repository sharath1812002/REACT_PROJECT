 import React  from 'react';
 import{Link} from 'react-router-dom';
 import{Row,Col,Form,Button, FormControl } from "react-bootstrap";

   const ReasultLoginPage=()=>
   {
    return(
        <> 
     <Link  to="/" className='btn btn-dark' style={{marginTop:"1rem"}}> Go Back</Link>
     <Row className='text-center'>
        <Col >
        <h3>Check your results here...</h3>
       </Col>
      </Row>
     <br/>
     <Row>
        <Col></Col>
        <Col style={{marginLeft:"-26rem"}} >
         <Form>
            <Form.Label> Enter your Register No:</Form.Label><br></br>
            <FormControl type='text' placeholder='Enetr your Register no ' style={{width:"70%"}}></FormControl>
            
          <Button  type=" submit "style={{marginTop:'1rem'}}>Submit</Button>
        </Form>
        
        </Col>
     </Row>
        </>
    )
   } 
   export default ReasultLoginPage
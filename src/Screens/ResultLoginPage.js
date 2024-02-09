 import React  from 'react';
 import{Link} from 'react-router-dom';
 import{Row,Col,Form,Button } from "react-bootstrap";

   const ReasultLoginPage=()=>
   {
    return(
        <> 
     <Link  to="/" className='btn btn-dark' style={{marginTop:"1rem"}}>  Go Back</Link>
     <Row className='text-center'>
        <Col >
        <h3>Check your results here...</h3>
      
        </Col>
      
     </Row>
     <br/>
     <Row>
        <Col >
     <Col style={{marginLeft:"23rem"}} >
         <Form>
            <label> Enter your Register No:</label><br></br>
            <input type='text' placeholder='Enetr your Register n6o ' style={{width:"50%"}}></input>
            <br/>
          <Button  type=" submit"style={{marginTop:'1rem'}}>Submit</Button>
        </Form>
        </Col>
        </Col>
     </Row>
        </>
    )
   } 
   export default ReasultLoginPage
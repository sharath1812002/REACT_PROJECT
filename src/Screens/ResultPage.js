import React from 'react'
import{Row,Col,Form, FormGroup ,Label} from 'react-bootstrap'
import TableData from './TableData'

const ResultPage =()=>
{
    return(
        <>
    <Row className='justify-content-center my-3' > 
                <Col  sm={12} md={6}>
            <h4>Viswesvaraya Technological University,Belagum</h4>
            <h6 style={{marginLeft:"4rem", fontSize:'15px'}}> VII - Semester  B.E Examination Result,Nov/Dec-2024</h6>
        </Col>
    </Row>
    <Row>
    <Col sm={12} md={6}> 
    <Form.Group>
        <Form.Label>Student  Name: </Form.Label>
        <Form.Label  style={{marginLeft:'5rem'}}>Sharthkumar A</Form.Label><br/>
        <Form.Label>Fother's /Mother's Name: </Form.Label>
        <Form.Label style={{marginLeft:'1rem'}}>Ashoke E</Form.Label><br/>
        <Form.Label > College Name: </Form.Label>
        <Form.Label style={{marginLeft:'5rem'}}> DR/CV Raman College</Form.Label>
    </Form.Group>
   
    </Col>
    
    <Col sm={12} md={6}>
        <Form.Group> 
             <Form.Label style={{float:"right"}}>RegisterNo:1STCS2024 </Form.Label>
             </Form.Group> 
    </Col>

    </Row>
    <Row>
        <TableData/>
    </Row>
        </>
    )
}
export default ResultPage
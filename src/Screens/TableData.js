import React from 'react'
import { Container, Table} from 'react-bootstrap'

const TableData =()=>
{   return(< Container>
       <Table  className='my-5' responsive  bordered>
        <thead>
            <tr>
                <th style={{paddingL:"0px 0px"}}>Sl No</th >

                <th colSpan={2}>Subject
                <th style={{padding:"0px 12.5rem"}}>Code</th>
                <th style={{padding:"0px 12.5rem"}}>Subject</th>
                </th>

                <th colSpan={3}>Examination Marks Obtained
                <th style={{padding:"0px 12.9rem"}}>Max</th>
                <th style={{padding:"0px 13rem"}}>Min</th>
                <th style={{padding:"0px 11.9rem"}}>Obtained</th>
                </th>
                <th style={{padding:"0px 10rem"}}>Subject Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>CSE001</td> 
                <td>JAVA</td> 
                 <td>100</td>
                 <td>35</td>
                 <td>65</td>
                 <td>PASS</td>
                        
                  </tr>
                  <tr>
                <td>1</td>
                <td>CSE001</td> 
                <td>JAVA</td> 
                 <td>100</td>
                 <td>35</td>
                 <td>65</td>
                 <td>PASS</td>
                        
                  </tr>
                
                  <tr>
                <td>1</td>
                <td>CSE001</td> 
                <td>JAVA</td> 
                 <td>100</td>
                 <td>35</td>
                 <td>65</td>
                 <td>PASS</td>
                        
                  </tr>
                  <tr>
                <td>1</td>
                <td>CSE001</td> 
                <td>JAVA</td> 
                 <td>100</td>
                 <td>35</td>
                 <td>65</td>
                 <td>PASS</td>
                        
                  </tr>
                 
        </tbody>
        <thead>
            <tr>
                <th colSpan={3}>Grand Total</th>
                <td>400</td>
                <td>140</td>
                <td>260</td>
                <td>pass</td> 
         </tr>
        </thead>
       </Table>
       
       <p><b>Total Marks Obtained[in words]</b> Two Hundred and Sixty only</p>
       <p><b>Result of Semester</b>:PASS</p>
       <p><b>Percentage</b>:65%</p>
       <p><b>Date</b>:05 dec 2024</p>

       </Container>
       
    )
} 
export default TableData
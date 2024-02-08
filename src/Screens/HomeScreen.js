import Recat from  'react'
import{Container,Row,Col,Carousel,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HomeScreen= ()=>{
    return(
        <>
        <div>
            <marquee>
                VTU Results 2024 out - Check Exam results here!!!<Link to='/result'>   Click here...</Link>
                Best of Luck
            </marquee>
        </div> 

        <div>
        <Carousel>

  <Carousel.Item>
    <img
      className="d-block w-100"//display block and width
      src="images/img1.jpg " alt="first slide" height={450}/>
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/img2.jpg " alt="second slide" height={450}/>
   

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
</Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
       src="images/img4.jpg " alt="fourth slide" height={450}/>
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>

  <Carousel.Item>
    
    <img
      className="d-block w-100"
       src="images/img5.jpg " alt="fifth image" height={450}/>
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>

</Carousel>
<br></br>
<div>
  <Row>
  
  <Col>
    <h3><Link to="/about"> Vision</Link></h3>
    <p className='p-style'>
    To become an outstanding Technological University at the cutting edge of Science and 
    Technology that produces world class Knowledge-delivery,
     Research, Extension and Leadership in Technology innovation for Industry and Society.
    </p>
    <p className='p-style'>
    To become an outstanding Technological University at the cutting edge of Science and 
    Technology that produces world class Knowledge-delivery,
     Research, Extension and Leadership in Technology innovation for Industry and Society.
    </p>
    <Link to='/about' className='btn btn-warning'>Read more</Link>

  </Col>

  <Col >
    <h3><Link to='/about'> Mission</Link></h3>
    <p className='p-style'>
    To become an outstanding Technological University at the cutting edge of Science and 
    Technology that produces world class Knowledge-delivery,
     Research, Extension and Leadership in Technology innovation for Industry and Society.
    </p>
    <p className='p-style'>
    To become an outstanding Technological University at the cutting edge of Science and 
    Technology that produces world class Knowledge-delivery,
     Research, Extension and Leadership in Technology innovation for Industry and Society.
    </p>
    <Link to='/about' className='btn btn-warning'>Read more</Link>

  </Col>


  <Col>
  <h3><Link to='/about'> Mandate</Link></h3>
    <p className='p-style'>

    To become an outstanding Technological University at the cutting edge of Science and 
    Technology that produces world class Knowledge-delivery,
     Research, Extension and Leadership in Technology innovation for Industry and Society.
    </p>
    <p className='p-style'>
    To become an outstanding Technological University at the cutting edge of Science and 
    Technology that produces world class Knowledge-delivery,
     Research, Extension and Leadership in Technology innovation for Industry and Society.
    </p>
    <Link to='/about' className='btn btn-warning'>Read more</Link>

  </Col>
  </Row>

</div>
        </div>
        </>
    )
} 
export default HomeScreen

import Recat from  'react'
import{Container,Row,Col,Carousel} from 'react-bootstrap';

const HomeScreen= ()=>{
    return(
        <>
        <div>
            <marquee>
                VTU Results 2024 out - Check Exam results here!!!<a href='#'>   Click here...</a>
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
        </div>
        </>
    )
} 
export default HomeScreen

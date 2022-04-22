import companyvector from "../assets/front.svg"
import { Container, Button, Form, FloatingLabel, Spinner, Row, Col , Card} from "react-bootstrap";
import Faq from "../Components/accordian"
import Navbar from "../Components/navbar"
import Footer from "../Components/footer"
import dummy from "../assets/dummy.png"
import tendays from "../assets/10.svg"
import fifteenworkshop from "../assets/15+.svg"
import './css/home.css'
const Home = () => {
  return (
    <>

      <Navbar/>

<Container fluid className= 'my-5 home'>

          <Container>
            <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-5">
              <h1 className="pe-3 font font-weight-bold">The Developer and Innovation 
              Festival of <span className='colortext font'>SASTRA UNIVERSITY</span></h1>
              <h5 className="pt-2 pb-4 col-lg-10 font">
              Dev Days is a series of technical workshops organised by Team Developer Community SASTRA, emphasising
              the Product-Developement Cycle. It is all about finding the perfect ways to inspire the community to learn
              and explore new technologies.
              </h5>
              <Button className="rounded-pill btn" size="lg">
              Register with homeversity
              </Button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-auto">
              <img
                src={companyvector}
                alt=" landing-vector"
                className="img-fluid"
              />{" "}
            </div>
            </div>
          </Container>
</Container>

<Container fluid className="about" >
          <Container>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-8 mt-auto pb-5 pt-5 pl-2 ">
              <h1 className="pe-3 font">About <span className='colortext'>Developer Days</span></h1>
              <h5 className="pt-2 pb-2 font">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </h5>
              <Button className="rounded-pill btn"  size="lg">
                Know more
              </Button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-5 pr-5 ">
              <img
                src={dummy}
                alt="dummyvector"
                className="img-fluid "
              />{" "}
            </div>
          </div>

<div>
<Row className="font">
               <Col>
               <img src={tendays}/>
               <h1>Days</h1>
               </Col>

               <Col>
               <img src={fifteenworkshop}/>
               <h1>Events</h1>
               </Col>
               <Col>
               <img src={tendays}/>
               <h1>Domains</h1>
               </Col>
               </Row> 
</div>
</Container>
</Container >

<Container fluid className='about my-5'>
                <Container fluid>
                <div>
                  <h1 className='pt-5 pb-5'>Frequently <span className='colortext'>Asked Questions</span></h1>
                </div>
                <div className="pb-5">
                  <Faq/>
                </div>
                </Container>
</Container>


<Container fluid  >
            <div>
             <h1 className='text-center'>Keep in touch with <span className='colortext'>#DeveloperDays</span></h1> 
             <h1 className='text-center'> for latest announcements</h1>
             <p className='text-center'>
                 Let's get connected so that we can reach out to each other via a simple notification.
                 Stake out #DeveloperDays for the updates and news.
               </p>
           
            </div>
</Container>


  </>
  )
}

export default Home
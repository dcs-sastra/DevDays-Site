import landingvector from "../assets/landingvector.svg"
import { Container, Button } from "react-bootstrap";
import Faq from "../Components/faq"
import Navbar from "../Components/navbar"
import Slickslider from "../Components/slickslider"
import Footer from "../Components/footer"
import tendays from "../assets/days.svg"
import fifteenworkshop from "../assets/workshop.svg"
import logo from "../assets/logo.png"
import Timeline from "../assets/Timeline.svg"
import socialmedia from "../assets/socialmedia.svg"

import './css/home.css'
const Home = () => {
  return (
    <>

      <Navbar/>

{/* landing part  */}
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
                src={landingvector}
                alt=" landing-vector"
                className="img-fluid"
              />{" "}
            </div>
            </div>
          </Container>
</Container>


{/* About part */}
<Container fluid className="about" >
          <Container className="pb-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mt-auto pt-5 pl-2 ">
              <h1 className="pe-3 font">About <span className='colortext'>Dev Days</span></h1>
              <h5 className="pt-2 pb-2 font">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </h5>
              <Button className="rounded-pill btn"  size="lg">
                Know more
              </Button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-5 ">
              <img
                src={logo}
                alt="DevDayslogo" 
                className="img-fluid "
              />{" "}
            </div>
          </div>


</Container>
<Container className="pb-5">
<div className="row text-center">
  <div className="col-lg-4 col-sm-12 col-md-4">
    <img
   src={tendays} 
    />
    <h2 className="pt-3">Days</h2>
  </div>
  <div className="col-lg-4 col-sm-12 col-md-4">
    <img
    src={fifteenworkshop}/>
    <h2 className="pt-3">Events</h2>
  </div>
  <div className="col-lg-4 col-sm-12 col-md-4">
    <img
   src={tendays} 
    />
    <h2 className="pt-3">Domains</h2>
  </div>
</div>
</Container>
</Container >

{/* Timeline part */}

<Container fluid>
<img
src={Timeline}
className="justify-content-md-center"
/>
<Container fluid className="pt-5 my-5">
<div className="">
  <h4>What can you expect? </h4>
</div>
<Slickslider/>
</Container>
</Container>

{/* Frequently asked part */}
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


{/* Keep in touch part */}
<Container fluid  >
            <div>
             <h1 className='text-center'>Keep in touch with <span className='colortext'>#DevDays</span></h1> 
             <h1 className='text-center'> for latest announcements</h1>
             <p className='text-center pt-2'>
                 Let's get connected so that we can reach out to each other via a simple notification.
                 Stake out #DevDays for the updates and news.
               </p>
           
            </div>


<div className="row text-center pt-5">
  <div className="col-lg-3 col-sm-4 col-md-4">
    <img
   src={socialmedia} 
    />
  </div>
  <div className="col-lg-3 col-sm-4 col-md-4">
    <img
    src={socialmedia}/>
  </div>
  <div className="col-lg-3 col-sm-4 col-md-4">
    <img
   src={socialmedia} 
    />
  </div>
  
  <div className="col-lg-3 col-sm-4 col-md-4">
    <img
   src={socialmedia} 
    />
  </div>
</div>
</Container>

<Container>
  <Footer/>
</Container>
  </>
  )
}

export default Home
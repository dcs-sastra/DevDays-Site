import landingvector from "../assets/landingvector.svg";
import { Container, Button } from "react-bootstrap";
import Faq from "../Components/faq";
import Navbar from "../Components/navbar";
import Slickslider from "../Components/slickslider";
import Footer from "../Components/footer";
import Badge from "../Components/badge";
import Badgelogo from "../assets/Badge.svg"
import tendays from "../assets/days.svg";
import fifteenworkshop from "../assets/workshop.svg";
import logo from "../assets/logo.png";
import Timeline from "../assets/Timeline.svg";
import socialmedia from "../assets/socialmedia.svg";

import "./css/home.css";
const Home = () => {
  return (
    <>
      <div className="pt-2">
        <Navbar />
      </div>

      {/* landing part  */}
      <Container fluid className="my-5 home">
        <Container>
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 mt-5 pt-5">
              <h1 className="font">
                The Developer and Innovation Festival of
                <span className="colortext font"> SASTRA UNIVERSITY</span>
              </h1>
              <p className="pt-2 pb-4 col-lg-10 font h6">
                We bring you a unique fest to band together the world of tech
                and nascent student developers. Developer Days are a set of
                tailored workshops, curated by tech aficionados to help you
                scour the intricacies of the product development cycle from
                scratch. Let's celebrate the joy of learning!
              </p>
              <div className="pt-3">
                <Button className="rounded-pill btn px-4 py-3" size="md">
                  Register with homeversity
                </Button>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 mt-auto pt-5">
              <img
                src={landingvector}
                alt=" landing-vector"
                className="img-fluid"
              />
            </div>
          </div>
        </Container>
      </Container>

      {/* About part */}
      <Container fluid className="about">
        <Container className="pb-5">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 mt-auto pt-5 pl-2 ">
              <h1 className="pe-3 font">
                About <span className="colortext">Dev Days</span>
              </h1>
              <p className="pt-2 pb-2 font h6">
                Dev Days is a series of technical workshops organised by team
                DCS, emphasising the Product-Development Cycle. It is all about
                finding the perfect ways to inspire the community to learn and
                explore new technologies. So, we present you with this festive
                of workshops to transform your dreary weekends into enthralling
                ones.
              </p>
              <div className="pt-3">
                <Button className="rounded-pill btn " size="md">
                  Know more
                </Button>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12 my-5 ">
              <div className="pt-5"></div>
              <img src={logo} alt="DevDayslogo" className="img-fluid " />
            </div>
          </div>
        </Container>
        <Container className="pb-5">
          <div className="row text-center">
            <div className="col-lg-4 col-sm-12 col-md-4 p-5">
              <img src={tendays} />
              <h2 className="pt-3">Days</h2>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-4 p-5">
              <img src={fifteenworkshop} />
              <h2 className="pt-3">Events</h2>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-4 p-5">
              <img src={tendays} />
              <h2 className="pt-3">Domains</h2>
            </div>
          </div>
        </Container>
      </Container>

      {/* Timeline part */}

      <Container fluid className="pt-5" id="schedule">
        <Container>
        <div className='row'>
        <h1 className="text-center pb-3 ">
          DevDays <span className="colortext">Timeline</span>{" "}
        </h1>
        <img src={Timeline}
        alt="Timeline"
        className="img-fluid my-3"
        />
</div>
</Container>
        <Container  className="pt-5 my-5" id="badge">

          <div className="">
            <h4>What can you expect? </h4>
          </div>
        </Container>
      </Container>

      {/* Badge Part */}

      <Container fluid className="about">
      <Badge/>
      </Container>

      {/* Frequently asked part */}
      <Container fluid className=" my-5" id="faq">
        <Container >
          <div>
            <h1 className="pt-5 pb-5">
              Frequently <span className="colortext">Asked Questions</span>
            </h1>
          </div>
          <div className="pb-5">
            <Faq />
          </div>
        </Container>
      </Container>

      {/* Keep in touch part */}
      <Container fluid>
        <div>
          <h1 className="text-center">
            Keep in touch with <span className="colortext">#DevDays</span>
          </h1>
          <h1 className="text-center"> for latest announcements</h1>
          <p className="text-center pt-2">
            Let's get connected so that we can reach out to each other via a
            simple notification. Stake out #DevDays for the updates and news.
          </p>
        </div>

        {/* <div className="row text-center pt-5 ">
          <div className="col-lg-3 col-sm-4 col-md-4">
            <img src={socialmedia} style={{height:40, width:40}} />
          </div>
          <div className="col-lg-3 col-sm-4 col-md-4">
            <img src={socialmedia} style={{height:40, width:40}}/>
          </div>
          <div className="col-lg-3 col-sm-4 col-md-4">
            <img src={socialmedia} style={{height:40, width:40}}/>
          </div>

          <div className="col-lg-3 col-sm-4 col-md-4">
            <img src={socialmedia} style={{height:40, width:40}}/>
          </div>
        </div> */}

        <div className="d-flex flex-row flex-fill justify-content-center">

          <div >
            <img src={socialmedia} style={{height:40, width:40}}  className="m-5"/>
          </div>
          <div >
            <img src={socialmedia} style={{height:40, width:40}} className="m-5"/>
          </div>
          <div >
            <img src={socialmedia} style={{height:40, width:40}} className="m-5"/>
          </div>
          <div >
            <img src={socialmedia} style={{height:40, width:40}} className="m-5"/>
          </div>
        </div>
      </Container>


      <Container>
        <Footer/>
      </Container>
    </>
  );
};

export default Home;

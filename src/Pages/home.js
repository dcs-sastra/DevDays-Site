import landingvector from '../assets/landingvector.svg';
import { Container, Button } from 'react-bootstrap';
import Faq from '../Components/faq';
import Navbar from '../Components/navbar';
import Badge from '../Components/badge';
import tendays from '../assets/days.svg';
import fifteenworkshop from '../assets/workshop.svg';
import logo from '../assets/Devdays Logo.svg';
import Timeline from "../assets/TimeLine-Devdays'25.svg";
import instagramicon from '../assets/instaicon.svg';
import linkedinicon from '../assets/Linkedinicon.svg';
import youtubeicon from '../assets/youtubeicon.svg';
import twittericon from '../assets/Twitter.svg';
import EventCard from '../Components/Card';
import './css/home.css';
const Home = () => {
  return (
    <>
      <div className='pt-2'>
        <Navbar />
      </div>

      {/* landing part  */}
      <Container fluid className='my-md-5 home'>
        <Container>
          <div className='row'>
            <div className='col-lg-7 col-md-7 col-sm-12 mt-md-5 pt-5'>
              <h1 className='font fw-bold'>
                The Developer and Innovation Festival of
                <span className='colortext font'> SASTRA UNIVERSITY</span>
              </h1>
              <p className='pt-2 pb-4 col-lg-10 para h6'>
                We bring you a unique fest to band together the world of tech and nascent student developers. Developer
                Days are a set of tailored workshops, curated by tech aficionados to help you scour the intricacies of
                the product development cycle from scratch. Let's celebrate the joy of learning!
              </p>
              <div className='pt-3'>
                <a href='https://forms.gle/Zqob1ZK4VMbtNPXP9' target='_blank' rel='noreferrer'>
                  <Button className='rounded-pill btn px-4 py-3' size='md'>
                    Interested? Click here
                  </Button>
                </a>
              </div>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-12 mt-auto pt-5'>
              <img src={landingvector} alt=' landing-vector' className='img-fluid' />
            </div>
          </div>
        </Container>
      </Container>

      {/* About part */}
      <Container fluid className='about'>
        <Container className='pb-5'>
          <div className='row'>
            <div className='col-lg-7 col-md-7 col-sm-12 mt-auto pt-5 pl-2 '>
              <h1 className='pe-3 font fw-bold'>
                About <span className='colortext'>DevDays</span>
              </h1>
              <p className='pt-2 pb-2 font para h6'>
                DevDays is a series of technical workshops organised by team DCS, emphasising the Product-Development
                Cycle. It is all about finding the perfect ways to inspire the community to learn and explore new
                technologies. So, we present you with this festive of workshops to transform your dreary weekends into
                enthralling ones.
              </p>
              <div className='pt-3'>
                <a href='https://www.instagram.com/share/BAfp_D6yMg' target='_blank' rel='noreferrer'>
                  <Button className='rounded-pill btn ' size='md'>
                    Know more
                  </Button>
                </a>
              </div>
            </div>

            <div className='col-lg-5 col-md-5 col-sm-12 my-5 '>
              <div className='pt-5'></div>
              <img src={logo} alt='DevDayslogo' className='img-fluid ' />
            </div>
          </div>
        </Container>
        {/* <Container className="pb-5">
          <div className="row text-center">
            <div className="col-lg-4 col-sm-12 col-md-4 p-5">
              <img src={tendays} />
              <h2 className="pt-3">Days</h2>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-4 p-5">
              <img src={tendays} />
              <h2 className="pt-3">Events</h2>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-4 p-5">
              <img src={tendays} />
              <h2 className="pt-3">Domains</h2>
            </div>
          </div>
        </Container> */}
      </Container>

      {/* Timeline part */}

      <Container fluid className='pt-5' id='schedule'>
        <Container>
          <div className='row'>
            <h1 className='text-center fw-bold pb-3 '>
              DevDays <span className='colortext'>Timeline</span>{' '}
            </h1>
            <img src={Timeline} alt='Timeline' className='img-fluid my-3' />
          </div>
        </Container>
      </Container>
      
      <EventCard/>
      

      {/* Badge Part */}

      {/* <Container fluid className="about" id="badge">
      <Badge/>
      </Container> */}

      {/* Frequently asked part */}
      <Container fluid className=' my-5' id='faq'>
        <Container>
          <div>
            <h1 className='pt-5 pb-5 fw-bold'>
              Frequently <span className='colortext'>Asked Questions</span>
            </h1>
          </div>
          <div className='pb-5'>
            <Faq />
          </div>
        </Container>
      </Container>

      {/* Keep in touch part */}
      <Container fluid id='contact' className='about'>
        <Container className='pt-5'>
          <div>
            <h1 className='text-center fw-bold '>
              Keep in touch with <span className='colortext'>#team_dcs</span>
            </h1>
            <h1 className='text-center fw-bold '> for latest announcements</h1>
            <p className='text-center para pt-2'>
              Let's get connected in social medias so that we can reach out to each other via a simple notification.
              Stake out #team_dcs for the updates and news.
            </p>
          </div>

          <div className='d-flex flex-row flex-fill justify-content-center'>
            <div>
              <a href='https://www.instagram.com/team_dcs_/' target='_blank'>
                <img src={instagramicon} style={{ height: 40, width: 40 }} className='m-3 m-lg-5' />
              </a>
            </div>
            <div>
              <a href='https://twitter.com/dcs_sastra' target='_blank'>
                <img src={twittericon} style={{ height: 40, width: 40 }} className='m-3 m-lg-5' />
              </a>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/dcs-sastra/' target='_blank'>
                <img src={linkedinicon} style={{ height: 40, width: 40 }} className='m-3 m-lg-5' />
              </a>
            </div>
            <div>
              <a href='https://www.youtube.com/c/DeveloperCommunitySASTRA' target='_blank'>
                <img src={youtubeicon} style={{ height: 40, width: 40 }} className='m-3 m-lg-5' />
              </a>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Home;

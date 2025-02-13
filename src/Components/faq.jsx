import React, { Component } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './css/faq.css';
class Faq extends Component {
  render() {
    return (
      <>
        <Accordion defaultActiveKey='0' flush>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>What is DevDays?</Accordion.Header>
            <Accordion.Body className='about'>
              DevDays is a series of technical workshops organised by team DCS, emphasising the Product-Development
              Cycle. It is all about finding the perfect ways to inspire the community to learn and explore new
              technologies. So, we present you with this festive of workshops to transform your dreary weekends into
              enthralling ones.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Who can register for DevDays?</Accordion.Header>
            <Accordion.Body className='about'>
              Anyone who is currently studying under any course in SASTRA Deemed to be University are eligible to attend
              this workshop.
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="2">
    <Accordion.Header>How to register for DevDays?</Accordion.Header>
    <Accordion.Body className='about'>
    You can register for DevDays workshop using our Homeversity App.
    </Accordion.Body>
  </Accordion.Item> */}
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Is it mandatory to register to participate in the workshop?</Accordion.Header>
            <Accordion.Body className='about'>
              Yes. Each individual may register once. You can not register on behalf of anyone else.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header>I have no technical knowledge. Can I still participate in this?</Accordion.Header>
            <Accordion.Body className='about'>
              Yes, Anybody with interest to learn new technology can participate. Our main goal is to help you people
              shine in tech community.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='5'>
            <Accordion.Header>Do you provide any certificates?</Accordion.Header>
            <Accordion.Body className='about'>Participants will receive e-certificate.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}

export default Faq;

import React, { Component } from 'react';
import logo from "../assets/logo.png"
import { Row, Col, Container } from "react-bootstrap"
import './css/footer.css'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <img src={logo} width="40%" height="auto" className="mt-5"></img>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <h3 className="colortext mt-5 text-center ">Quick Links</h3>
                            <ul className="text-center">
                                <a href="/#organizers">Organizers</a><br />
                                <a href='/#sponsors'>Sponsors</a><br />
                                <a href='/#badge'>Badge</a><br />
                                <a href='/#faq'>FAQ</a>
                            </ul>
                        </div>

                    </div>
                </Container>
            </div>
        )
    }
}


export default Footer
import React, {Component} from 'react';
import logo from "../assets/logo.png"
import {Row, Col} from "react-bootstrap"
class Footer extends Component {
    render(){
        return(
            <>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img
                    src = {logo}
                    />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <h1>Organisers</h1>
                    <h1>Organisers</h1>
                    <h1>Organisers</h1>
                    <h1>Organisers</h1>
                </div>
            </div>
            </>
        )
    }
}


export default Footer
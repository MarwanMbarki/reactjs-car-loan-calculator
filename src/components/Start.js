import React, { Component } from 'react';
import {Link} from 'react-router-dom';import logo from '../img/car.svg';
import '../sass/_start.scss';
import { 
  Button,
 } from 'reactstrap';
class Start extends Component {
    render(){
        return(
            <div className="start_btn">
                <img src={logo} alt="Logo"/>
                <Link to="/calculator" >
                    <Button color="success">Start</Button>
                </Link>
            </div>
        );
    }
}
export default Start;
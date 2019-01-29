import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../sass/_navbar.scss';

class Navbar extends Component {
    render(){
        return(
            <div className="Navbar">
                <div className="container">
                    <div className="row">
                    <div className="nav_wrapper">
                        <ul>
                            <li>
                            <img src="/images/tmlogo.png" alt="Logo"/>
                            </li>
                            
                        </ul>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        
                        <li>
                                <Link to="/calculator">Calculator</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Navbar;
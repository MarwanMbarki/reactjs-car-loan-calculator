import React, { Component } from 'react';
import * as  moment  from 'moment';
import '../sass/_result.scss';
import { 
  Button,
 } from 'reactstrap';
class Result extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            date: moment().format("MMMM Do YYYY")
        }
    }
    


    render(){
        return(
            <div className="Result">
                <div className="container">
                    <div className="row">
                    <div>
                    <p>* First month Arrangment fee apply £80.</p>
                    
                    {"\n"}
                    
                    <p>* £20 completion fee at the last payment apply</p>
                    </div>
                        
                        
                        <div className="table_wrapper">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Monthly Payments</th>
                                <th scope="col">Arrangement Fee</th>
                                <th scope="col">Completion Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{this.state.date}</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="row">
                        <Button color="success">Calculator</Button>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Result;
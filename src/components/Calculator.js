import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import * as  moment  from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../sass/_calculator.scss';
import ads from '../img/glasgowarnold.jpg';

import { 
  Alert,
 } from 'reactstrap';
class Calculator extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            inputDeposit:'',
            year:'',
            car:[],
            search:[],
            
            startDate: new Date(),
            date: moment().format("MMMM Do YYYY")
        };
        this.handleChange = this.handleChange.bind(this);
        this.getPice = this.getPice.bind(this);
        this.getDeposit = this.getDeposit.bind(this);
        this.handleYears = this.handleYears.bind(this);
        this.getMonthlyPay = this.getMonthlyPay.bind(this);
        
        this.textInput = React.createRef();
    }

    componentDidMount(){

        // REFRESH AFTER FEW SECONDS
        let newTime = Date.now() - this.props.date;
        setInterval(()=>{
            this.setState({
                clock: newTime
                
            })
           
        
        
        fetch('ADD_YOUR_JSON_URL_HERE')
            .then(response => {
            return response.json();
            })
            
            .then((carProduct)=>{
               
                
                this.setState({
                    cars:carProduct.title,
                    search:carProduct.searchResults
                   
                })
                
            })

        }, 1000);
        
    }


    // GET CAR PRICE
    getPice(price) {
        this.setState({
          inputValue: price.target.value
        });
      }

      getDeposit(deposit){
          this.setState({
            inputDeposit: deposit.target.value
          });
      }

    // GET DATE FORM
    handleChange(date) {
        this.setState({
          startDate: date
        });
      }

      // CALCULATE NUMBER OF YEAR
    handleYears(period){
        this.setState({
            year: period.target.value
        });
    }
      
    //CALCULATE DEPOSIT
    clacDeposit(){
        const depositVal = (this.state.inputValue * 15 ) / 100;
        
        if ( this.state.inputValue === '' ){
            return '';
        }else if ( depositVal > this.state.inputDeposit ) {
            return <Alert color="danger">15% deposit required!</Alert>;
        } else  {
            return <Alert color="success">Looking Good, you met the minimum require deposit.</Alert>;
        }  
        
    }

    // GET MONTHLY PAYMENTS
    getMonthlyPay(){
        const total = this.state.inputValue - this.state.inputDeposit;
        const monthly = total / this.state.year;
        
        return monthly;
    }

    //FIRST MONTH WITH ARRANGED DEPOSIT
    firstArranged(){
        const total = this.state.inputValue - this.state.inputDeposit;
        const arrangedmonthly = total / this.state.year;
        return arrangedmonthly+88;
    }

    
    // GET FIRST MONDAY OF EVERY MONTH
    firstMonday()
    {
       // var dt = moment(this.state.startDate, "YYYY-MM-DD").add(this.state.year, 'month').weekday(8);
        //var paymentStart = moment(this.state.startDate, "YYYY-MM-DD");
        var dateStart = moment(this.state.startDate, "YYYY-MM-DD")
        var dateEnd = moment(this.state.startDate, "YYYY-MM-DD").add(this.state.year, 'month').weekday(8);
        var timeValues = [];

        while (dateEnd > dateStart || dateStart.format('M') === dateEnd.format('M')) {
        timeValues.push(dateStart.format('dddd, DD-MM-YYYY '));
        dateStart.add(1, 'month').weekday(8);
        }
       
        return timeValues;
       
    }
    
    createTable = () => {
        let table = []
       
        for( let i = 0; i < this.state.year; i++){
            
            table.push(
                <tr className="booka">
                    <th scope="row">{this.firstMonday()[i]}</th>
                    <td><strong>£</strong>{this.getMonthlyPay().toFixed(2)}</td>
                </tr>
                
                )
        
        }
        return table;
    }

    render(){
        
        return(
            <div className="Calculator">
                <div className="container">
                
                    <div className="row">
                        <div className="col-md-12 title">
                            <h1>Calculator</h1>
                        </div> 
                    </div> 

                    <div className="row">
                        
                        <div className="col-md-6 form_wrapper">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">£</span>
                                        </div>
                                        <input type="text" className="form-control" value={this.state.inputValue} onChange={this.getPice} placeholder="Car Price (to the nearest dollar)"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">£</span>
                                        </div>
                                        <input type="text" className="form-control" value={this.state.inputDeposit} onChange={this.getDeposit} placeholder="Deposit Amount (minimum 15%)"/>
                                    </div>
                                        {this.clacDeposit()}
                                </div>
                                <div className="form-group">
                                    <label>Delivery Date</label>
                                    <div className="input-group mb-3">
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                    />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="year">Number Of Years:</label>
                                    <select className="form-control" id="years" onChange={this.handleYears}>
                                        <option value="">Select Option</option>
                                        <option value="12">1</option>
                                        <option value="24">2</option>
                                        <option value="35">3</option>
                                    </select>
                                </div>
                                {/* <input type="submit" value="Submit" className="btn btn-primary"/> */}
                            </form>
                            <Alert color="success">£{this.firstArranged().toFixed(2)} (Arranged Fee included for the first month and after £{this.getMonthlyPay().toFixed(2)} only.)</Alert>
                            
                        </div>

                        <div className="col-md-6 ads_wrapper">
                           
                            <img src={ads} alt="ads" />
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Monthly Payments</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                
                                    {this.createTable()}
                                
                                   
                            </tbody>  
                        </table>
                    </div>

                    
                    <div className="col-md-6">
                        <div className="catype-title">
                            <h1>Our Best Offers</h1>
                        </div>
                        <div className="catype-content">
                            <div className="row">


                            {
                
                    
                                    this.state.search.slice(0,6).map((carType, index)=> 

                                    

                                    <div className="col-md-6 cartype" key={index}>
                                    <div className="car_img">
                                    <a href={carType.url}>
                                        <img src={carType.photos} alt="car"/>
                                    </a>
                                     
                                    </div>
                                    <div className="model">
                                         <p>{carType.title.name}</p>
                                      </div>
                                    <div className="price">
                                        <p>Cash Price: £{carType.salesInfo.pricing.cashPrice}</p>
                                    </div>
                                    <div className="monthly">
                                        <p>Monthly: £{carType.salesInfo.pricing.monthlyPayment}</p>
                                    </div>
                                    
                                </div>
                                
                                       
                                    )
                                    
                                    
                                }

                                

                            

                            </div>
                        </div>

                    </div>
                        
                    </div>
                        
                </div>   
            </div>
        );
    }
}
export default Calculator;

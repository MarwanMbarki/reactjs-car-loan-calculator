import React, { Component } from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import './App.scss';
import './components/Navbar';
import './components/Banner';
// import { 
//   Button,
//   Alert
//  } from 'reactstrap';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Start from './components/Start';
import Calculator from './components/Calculator';


class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <div className="App">
          
            <Navbar />
            <Banner />
          <Switch>
            <Route path="/" component={Start} exact/>
            <Route path="/calculator" component={Calculator} />
          </Switch>
          </div>
        
        </BrowserRouter>
       
        
      
    );
  }
}

export default App;

import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../sass/_banner.scss';

class Banner extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            result:null,
            banners:[],
            headerTitle:[],
            headerSubTitle:[]
            
        };
    }

    componentDidMount(){

        var url = "ADD_YOUR_JSON_URL_HERE";
        fetch(url)
            .then(response => {
            return response.json();
            })
            
            .then((bannerTitle)=>{
                this.setState({
                    banners:bannerTitle.title,
                    headerTitle:bannerTitle.banner.bold_text,
                    headerSubTitle:bannerTitle.banner.text_two

                });
            })

        
    }



    render(){
        if(this.state.bannerTitle) return <p>Loading...</p>
        return(
           <div className="banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="banner_wrapper">
                            <div>
                                {/* Title */}
                                <div>
                                    <h5>
                                    { this.state.headerTitle +' ' +this.state.headerSubTitle} 
                                    </h5>
                                </div>
                                {/* Subtitle */}
                                <div>
                                    <p>{this.state.banners}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        );
       } 
}

export default Banner;

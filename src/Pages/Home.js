import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, makeStyles, Container } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import CountryPicker from "../Components/CountryPicker";
import Cards from "../Components/Cards";
import image from "../images/image.png"
import handwash from "../images/handwash.png"
import { fetchData } from "../api/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import distance from "../images/distance.png";
import distance2 from "../images/distance2.png";


class Home extends React.Component {


    state = {
        data: {},
        country: "",
    };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

    
    render() {

        const { data, country } = this.state;
        return (
            <>
                

            
            

            <div className='text-center' style={{ background: '#fff',paddingTop: '125px', backgroundColor: '#fff', backgroundImage: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)', paddingBottom: '50px' }}>
                    <CountryPicker handleCountryChange={this.handleCountryChange} /><br></br>
                    <span style={{ borderRadius: '20px', background: '#b9f4bc', padding: '5px 20px', fontSize: '1.2em'}} className='text-success mt-5'>COVID CASES</span><br/><br/>
                    <Cards data={data} country={country}/>
            </div>
            <div className='container-fluid home-container' style={{ height: 'fit-content', overflow: 'hidden', fontFamily: 'Poppins', background: '#fff', paddingLeft: 0, marginLeft: 0, marginTop: 20 }}>
                <div className="row home-row">
                    <div className='col-lg-5 offset-lg-1 col-8 offset-2' style={{ padding: '12% 0px 180px', }}>
                        
                        <h2 className='mt-5' style={{ fontSize: '50px' }}>Please to stay home if you're sick and remember to wash your hands</h2>
                    </div>
                    <div className='col-lg-5 mr-3'>
                        <img src={handwash} alt='Stay Home' className='img-fluid home-img' />
                    </div>
                    
                </div>
            </div>
            <div className='container-fluid home-container' style={{ height: '600px', overflow: 'hidden', fontFamily: 'Poppins', background: '#fff', paddingLeft: 0, marginLeft: 0, marginTop: 20 }}>
                <div className="row home-row" height="600px">
                    
                    
                        <img src={distance2} alt='Stay Home' className='img-fluid home-img' />
                    
                    
                </div>
            </div>

        
        
            </>
        )
    }
}

export default Home

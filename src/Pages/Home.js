import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, makeStyles, Container } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import CountryPicker from "../Components/CountryPicker";
import Cards from "../Components/Cards";
import image from "../images/image.png"
import { fetchData } from "../api/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import distance from "../images/distance.png";
import distance2 from "../images/distance2.png";
import Advice from "../Components/Advice";


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
            <Advice />
            

        
        
            </>
        )
    }
}

export default Home

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

const Info = () => {
    const [data,setData] = useState({})
    useEffect(() => {
        async function fetchAPI(){
            const fetchedData = await fetchData();
            setData(fetchedData)
        }
        fetchAPI()
        
    })
    
    
    return (
        <>
             <div className='container-fluid home-container' style={{ height: 'fit-content', overflow: 'hidden', fontFamily: 'Poppins', background: '#fff', paddingLeft: 0, marginLeft: 0, marginTop: 20 }}>
                <div className="row home-row" height="600px">
                    <img src={distance2} alt='Stay Home' className='img-fluid home-img' />
                </div>
            </div>
        </>
    )
}

export default Info
import React from "react";
import CountryPicker from "./Components/CountryPicker"
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
import Cards from "./Components/Cards"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import image from "./images/image.png"
import handwash from "./images/handwash.png"
import { Container, Grid, Card } from "@material-ui/core";
import Charts from "./Components/Charts";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <Nav>
        <Route 
          path='/'
          exact={true}
          component={Home}
        />
        
        {/*<Route
          path='/stats'
          render={() => {
            return(
              <div className="container-fluid col-12" style={{ margin:0, padding:'0px', width: '100vw', height: '100vh' }}>
                <div className='container-fluid mb-5 ml-0 text-center' style={{ marginTop: '150px', padding:'0px'}}>
                  <span style={{ border: '0',borderRadius: '20px', background: '#b9f4bc', padding: '5px 20px', fontSize: '1.2em'}} className='text-success mb-3'>COVID-19 Stats</span>
                  <h1 className='mt-3 pl-3 pr-3 ml-3 mr-3'>COVID-19 Statistics</h1>
                  <Cards data={data} />
                  <CountrySelector handleCountryChange={this.handleCountryChange} />
                  <Chart data={data} country={country} />
                </div>
                <Footer />
              </div>
            )
          }}
        
        />*/}
        
      </Nav>
    </Router>
  )
}

export default App;

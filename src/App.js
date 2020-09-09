import React from "react";
import CountryPicker from "./Components/CountryPicker"
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
import Cards from "./Components/Cards"
import Header from "./Components/Header"
import image from "./images/image.png"
import handwash from "./images/handwash.png"
import { Container, Grid, Card } from "@material-ui/core";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Info from "./Pages/Info";

const App = () => {
  return (
    <Router>
      <Nav>
        <Route 
          path = '/Covid-stats'
          exact={true}
          component={Home}
        />
        <Route 
          path='/info'
          component={Info}
        />
        
        
      </Nav>
    </Router>
  )
}

export default App;

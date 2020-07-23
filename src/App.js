import React from "react";
import CountryPicker from "./Components/CountryPicker"
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
import Cards from "./Components/Cards"
import Navbar from "./Components/Navbar"
import image from "./images/image.png"
import handwash from "./images/handwash.png"
import { Container, Grid, Card } from "@material-ui/core";

class App extends React.Component {
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
      <Container maxWidth="lg">
        <Grid 
        container
        direction="column"
        alignItems="center"
        >
          <Grid item xs={12}>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Cards data={data} country={country} />
          </Grid>
        </Grid>
        
        <br></br>

        <Grid container spacing={4} alignItems="center" direction="column">
          <Grid item xs={12}>
            <h1 className={styles.h1}>How to prevent covid-19</h1>
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center" direction="column" margin-top='50px'>
          <Grid item xs={12}>
            <img classname={image} src={handwash}></img>
          </Grid>
        </Grid>

      </Container>
    );
  }
}

export default App;
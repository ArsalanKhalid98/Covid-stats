import React from "react";
import CountryPicker from "./Components/CountryPicker"
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
import Cards from "./Components/Cards"
import Navbar from "./Components/Navbar"
import image from "./images/image.png"
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
        <Grid container spacing={ 4 } >
          <Grid item xs={ 12 }>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
          </Grid>
        </Grid>

        <Grid container spacing={ 4 }>
          <Grid item xs={ 12 }>
              <Cards data={data} country={country} />
          </Grid>
        </Grid>

      </Container>
    );
  }
}

export default App;
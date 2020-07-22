import React from "react";
import CountryPicker from "./Components/CountryPicker"
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
import Cards from "./Components/Cards"
import Navbar from "./Components/Navbar"
import image from "./images/image.png"

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
      <div className={styles.container}>
        <Navbar></Navbar>
        <img className={styles.image} src={image} alt="COVID-19" />
        <br></br>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} country={country} />
      </div>
    );
  }
}

export default App;
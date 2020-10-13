import React from "react";

// import components
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

// create a class which extends the react component
class App extends React.Component {
  // set the intitial state
  state = {
    // create an object called data thats unpopulated
    data: {},
  };

  /* create a async lifecycle component called componentDidMount and check
  the if the data rendered */
  async componentDidMount() {
    // create a variable called data and await the fetched reponse
    const fetchedData = await fetchData();

    /* populate the data object in the state with setState, then create
    a data property equal to the fetchData variable */
    this.setState({ data: fetchedData });
  }
  render() {
    // create a variable and  deconstruct the data from the state
    const { data } = this.state;
    return (
      <div className={styles.container}>
        {/* add data props to card component */}
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;

import axios from "axios";

// create a variabel called url and add the API url
const url = "https://covid19.mathdro.id/api";

// create a async arrow function called fetchData to fetch the data from the API
export const fetchData = async () => {
  // create a try and catch block to catch any errors
  try {
    /* executed if fetch is succesful then create a variable called 
    response and get the response from the await then get the url with 
    axios then destructure the data from the response */
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    /* return the data properties in a simple return statement, 
    we do not need to store it in an object because we return it right after */
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    // executed if fetch is unsuccesfull
  }
};

// create an asynchronous function called fetchDailyData
export const fetchDailyData = async () => {
  // add some exception handling
  try {
    // create a deconstructed variable called data holding the fetching the daily info
    const { data } = await axios.get(`${url}/daily`);

    console.log(data);
  } catch (error) {}
};

import React, { useState, useEffect } from "react";
// import the API data
import { fetchDailyData } from "../../api";

const Chart = () => {
  /* add hooks called dailyData and setDailyData to handle post fetch 
  and set the initvalue to an empty object */
  const [dailyData, setDailyData] = useState({});

  // add the useEffect method
  useEffect(() => {
    // create an asynchronous function called fetchAPI
    const fetchAPI = async () => {
      /* create a variable called dailyData with the await operator that 
      waits for the promise */
      const dailyData = await fetchDailyData();
      // update the state variable with our updated daily data
      setDailyData(dailyData);
    };
  });
  return <h1>Chart</h1>;
};

export default Chart;

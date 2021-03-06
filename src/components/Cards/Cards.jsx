import React from "react";
// add components and libraries and css
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
// import cx for handling multiple classnames inside the materialUI items
import cx from "classnames";

/* create an arrow function called Cards holding the destructered data
from the data prop */
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  /* create an if statement that check if the data is present */
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      {/* use the materialUI library to create a card with built-in styling */}
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              {/* use the countUp library to make the info dynamic, and show the 
              number of cases of infected people  */}
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {/* use the lastUpdate data to show the most recent update of the 
              info, and convert it to a smaller format with the toDateString method*/}
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases from COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              {/* apply countUp dynamically to showcase the amount of recovered poeple */}
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                seperator=","
              />
            </Typography>{" "}
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography variant="body2">
              Number of recovered cases from COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              {/* apply countUp dynamically to showcase the amount of deceased people */}
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                seperator=","
              />
            </Typography>{" "}
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography variant="body2">
              Number of deaths cases from COVID 19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

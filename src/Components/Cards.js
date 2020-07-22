import React from "react";
import { Card, CardContent, Typography, Grid, makeStyles } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 12,
    padding: 12,
    textAlign: 'center',
    height: '100%',
    boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.2)',
  },
  subtitle1: {
    textTransform: 'uppercase',
    fontSize: '.75rem',
    letterSpacing: 2,
    margin: '0',
  },
  h5: {
    fontSize: '2.5rem',
    fontWeight: 300,
    margin: '12px 0 24px',
  },
  loading: {
    textAlign: 'center',
    paddingTop: 16,
  },
  colorInfected: {
    color: '#ffc107',
  },
  colorRecovered: {
    color: '#4caf50',
  },
  colorDied: {
    color: '#f44336',
  },
  container: {
    margin: '50px',
  },
}));

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  const styles = useStyles();
  if (!confirmed) {
    return "Loading...";
  }
  let cardDetails = [
    {
      value: confirmed.value,
    },
    {
      value: recovered.value,
    },
    {
      value: deaths.value,
    }
    
    
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" className={ cx(styles.container) }>
          <Grid
            item
            component={Card}
            xs={12}
            className={cx(styles.Card)}
            style={{ margin: "0px 23.675px", padding: "12px" }}
          >
            <CardContent>
              <Typography variant="subtitle1" className={ cx(styles.subtitle1, styles.colorInfected) }gutterBottom>
                <b>Infected</b>
              </Typography>
              <Typography className={ cx(styles.h5, styles.colorInfected) }>
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textPrimary">Last Updated at : </Typography>
              <Typography color="textSecondary" variant="body2">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {new Date(lastUpdate).toLocaleTimeString()}
              </Typography>
            </CardContent>
          </Grid>

          
          <Grid
            item
            component={Card}
            xs={12}
            className={cx(styles.Card)}
            style={{ margin: "0px 23.675px", padding: "12px" }}
          >
            <CardContent>
              <Typography variant="subtitle1" className={ cx(styles.subtitle1, styles.colorRecovered) }gutterBottom>
                <b>Recovered</b>
              </Typography>
              <Typography className={ cx(styles.h5, styles.colorRecovered) }>
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textPrimary">Last Updated at : </Typography>
              <Typography color="textSecondary" variant="body2">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {new Date(lastUpdate).toLocaleTimeString()}
              </Typography>
            </CardContent>
          </Grid>


          <Grid
            item
            component={Card}
            xs={12}
            className={cx(styles.Card)}
            style={{ margin: "0px 23.675px", padding: "12px" }}
          >
            <CardContent>
              <Typography variant="subtitle1" className={ cx(styles.subtitle1, styles.colorDied) }gutterBottom>
                <b>Dead</b>
              </Typography>
              <Typography className={ cx(styles.h5, styles.colorDied) }>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textPrimary">Last Updated at : </Typography>
              <Typography color="textSecondary" variant="body2">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {new Date(lastUpdate).toLocaleTimeString()}
              </Typography>
            </CardContent>
          </Grid>
        
      </Grid>
    </div>
  );
};

export default Cards;

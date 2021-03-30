import React from 'react';
import Bar from './Bar';
import Cards from './Cards';
import { Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chart from './Chart';
import Tables from './Tables';


const useStyles = makeStyles({
  gridContainer:{
    padding:15,
      }
});
export default function Dashboard() {
    const classes = useStyles();
    return (
      <div>
        <Grid container >
        <Grid item xs={12} sm={12} md={12}>
        <Bar />
        </Grid>
        </Grid>
        
        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={3}>
          <Cards title1='Today’s order' des1='200' title2='Current Week Order' des2='450' />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Cards title1='Today’s order amount' des1='20000' title2='Current Week amount' des2='45000' />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Cards title1='MTD order' des1='400' title2='Last Month Order' des2='200' />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Cards title1='MTD order amount' des1='65000' title2='Last month amount' des2='45000' />
          </Grid>
        </Grid>
        <Grid container >
        <Grid item xs={12} sm={12} md={12}>
        <Chart />
        </Grid>
        </Grid>
        
        <Grid container >
        <Grid item xs={12} sm={12} md={12}>
        <Tables />
        </Grid>
        </Grid>
      </div>
    )
}


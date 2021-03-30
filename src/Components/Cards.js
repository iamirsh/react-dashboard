import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
  },
  
  title: {
    fontSize: 17,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.title1}
        </Typography>
        <Typography variant="h5" component="h2">
        {props.des1}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.title2}
        </Typography>
        <Typography variant="h5" component="h2">
        {props.des2}
        </Typography>  
      </CardContent>
    </Card>
  );
}
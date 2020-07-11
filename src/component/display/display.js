import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(6),
    textAlign: "right",
    color: theme.palette.text.secondary,
    borderRadius: 0,
    backgroundColor: "#858694",
    fontSize:"1.5rem",
  },
}));

export default function Display(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{props.value}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

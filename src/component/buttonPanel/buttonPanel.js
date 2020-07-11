import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import ButtonCustom from "./button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: 0,
    backgroundColor: "grey",
  },
  paperItem: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: 0,
    backgroundColor: "green",
    padding: theme.spacing(0),
  },
}));

const handleClick = (props, propsnew) => {
  console.log("handleClick from bottonpanel", propsnew);
  console.log("handleClick from bottonpanel", props);
  propsnew.clikmeApp(props.buttonName);
};

export default function ButtonPanel(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>

        
      <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="AC"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="+/-"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="%"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="÷"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>


        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="7"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="8"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="9"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="x"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>


        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="4"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="5"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="6"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="-"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>


        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="1"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="2"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="3"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="+"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>
        

        <Grid item xs={6}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="0"
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="."
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperItem}>
            <ButtonCustom
              buttonName="="
              clikmeButtonPanel={(value, propsnew) => handleClick(value, props)}
            ></ButtonCustom>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}

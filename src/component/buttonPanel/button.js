import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: 10,
    borderRadius: 0,
    paddingBottom: theme.spacing(3),
    fontSize: "1.5rem",
    fontFamily: ["Arial"].join(","),
  },
}));

const handleClick = (props) => {
  console.log("handleClick from buttoncustom", props);
  console.log("handleClick from buttoncustom", props.buttonName);
  props.clikmeButtonPanel(props);
};

export default function Buttons(props) {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      fullWidth
      variant="contained"
      onClick={() => handleClick(props)}
    >
      {props.buttonName}
    </Button>
  );
}

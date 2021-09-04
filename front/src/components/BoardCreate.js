import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  add: {
    background: "#009688",
    color: "#ffffff",
    "&:hover": {
      background: "#26a69a",
      color: "#ffffff",
    },
  },
}));

export default function BoardCreate() {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="filled-basic"
            label="Title"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="filled-basic"
            label="Describtion"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="filled-basic"
            label="Apply URL"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="filled-basic"
            label="Company name"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="filled-basic"
            label="Company logo URL"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            className={classes.add}
            endIcon={<SendIcon />}
            fullWidth
            style={{padding: 14}}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}));

export default function BoardCreate() {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off" className={classes.form}>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        align="center"
      >
        Create new board
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            label="Title"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            label="Describtion"
            variant="filled"
            fullWidth
            minRows="10"
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            label="Apply URL"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            label="Company name"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            label="Company logo URL"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
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

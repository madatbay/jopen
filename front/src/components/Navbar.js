import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.style}>
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <AssignmentTurnedInIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title} align="center">
            <Link to="/" className={classes.dBlock}>
              Jopen
            </Link>
          </Typography>
          <Link to="/create">
            <Button color="inherit">
              <AddIcon /> Board
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

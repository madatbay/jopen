import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  btn: {
    color: "#009688",
  },
  mt2: {
    marginTop: 8,
  },
});

export default function BoardCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item>
              <Avatar
                alt="Company name"
                src="https://www.oneclickshoppers.com/wp-content/uploads/2020/08/lays_logo.jpg"
              />
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.mt2}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button size="small" className={classes.btn}>
              Apply
            </Button>
            <Button size="small" className={classes.btn}>
              Share
            </Button>
          </Grid>
          <Grid item>
            <Chip label="Basic" variant="outlined" />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

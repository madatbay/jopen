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
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  mt2: {
    marginTop: 8,
  },
});

export default function BoardCard({board}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/board/${board.id}`} >
            <CardActionArea>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item>
              <Avatar
                alt={board.company_name}
                src={board.logo_url}
              />
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                {board.title}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.mt2}
          >
            {String(board.describtion).slice(0, 120)}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>

      <CardActions>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button size="small" color="primary" href={board.url}>
              Apply
            </Button>
            <Button size="small" color="primary" disabled>
              Share
            </Button>
          </Grid>
          <Grid item>
            <Chip label={`#${board.id}`} variant="outlined" />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
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
import BusinessIcon from "@material-ui/icons/Business";
const axios = require("axios").default;

const useStyles = makeStyles((theme) => ({
  root: {},
  btn: {
    color: "#009688",
  },
  chip: {
    background: "#009688",
    color: "#ffffff",
    padding: theme.spacing(2),
  },
  mt2: {
    marginTop: 8,
  },
  large: {
    display: "flex",
    justifyContent: "center",
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function BoardDetail() {
  const [board, setBoard] = useState("");
  let { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/boards/${id}`)
      .then(function (response) {
        response.data && setBoard(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <Card className={classes.root} raised>
      <CardActionArea>
        <CardContent>
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={12} align="center">
              <Avatar
                alt={board.company_name}
                src={board.logo_url}
                className={classes.large}
              />
            </Grid>
            <Grid item xs={12} align="center">
              <Chip
                icon={<BusinessIcon style={{ color: "#ffffff" }} />}
                label={board.company_name}
                className={classes.chip}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                {board.title}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
            className={classes.mt2}
          >
            {board.describtion}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button size="small" className={classes.btn} href={board.url}>
              Apply
            </Button>
            <Button size="small" className={classes.btn} disabled>
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

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
const axios = require("axios").default;


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
  },
}));

export default function BoardCreate() {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [describtion, setDescribtion] = useState("");
  const [describtionError, setDescribtionError] = useState(false);
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState(false);
  const [companyLogo, setCompanyLogo] = useState("");
  const [companyLogoError, setCompanyLogoError] = useState(false);
  const classes = useStyles();
  let history = useHistory();


  const handleSubmit = () => {
    !title && setTitleError(true);
    !describtion && setDescribtionError(true);
    !url && setUrlError(true);
    !companyName && setCompanyNameError(true);
    !companyLogo && setCompanyLogoError(true);
    if (title && describtion && url && companyName && companyLogo) {
      axios
        .post("http://localhost:8000/api/v1/boards/create/", {
          title: title,
          describtion: describtion,
          url: url,
          company_name: companyName,
          logo_url: companyLogo
        })
        .then(function (response) {
          if (response.status === 200){
            history.push(`/board/${response.data.id}`)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <form noValidate autoComplete="off" className={classes.form}>
      <Typography gutterBottom variant="h5" component="h2" align="center">
        Create new board
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-title"
            label="Title"
            variant="outlined"
            fullWidth
            error={titleError}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleError(false);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-describtion"
            label="Describtion"
            variant="outlined"
            fullWidth
            minRows="10"
            multiline
            error={describtionError}
            value={describtion}
            onChange={(e) => {
              setDescribtion(e.target.value);
              setDescribtionError(false);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-url"
            label="Apply URL"
            variant="outlined"
            fullWidth
            error={urlError}
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setUrlError(false);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-company-name"
            label="Company name"
            variant="outlined"
            fullWidth
            error={companyNameError}
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
              setCompanyNameError(false);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-company-logo"
            label="Company logo URL"
            variant="outlined"
            fullWidth
            error={companyLogoError}
            value={companyLogo}
            onChange={(e) => {
              setCompanyLogo(e.target.value);
              setCompanyLogoError(false);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<SendIcon />}
            fullWidth
            style={{ padding: 14 }}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

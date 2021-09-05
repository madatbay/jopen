import React, { useEffect, useState } from "react";
import BoardCard from "./BoardCard";
import { Grid } from "@material-ui/core";
const axios = require("axios").default;

export default function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/boards/all/")
      .then(function (response) {
        response.data && setBoards(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <Grid container spacing={3}>
      {boards.map((board) => (
        <Grid item xs={12} sm={6} md={3} key={board.id}>
          <BoardCard board={board} />
        </Grid>
      ))}
    </Grid>
  );
}

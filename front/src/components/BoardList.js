import React from "react";
import BoardCard from "./BoardCard";
import { Grid } from "@material-ui/core";

export default function BoardList() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <BoardCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <BoardCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <BoardCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <BoardCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <BoardCard />
      </Grid>
    </Grid>
  );
}

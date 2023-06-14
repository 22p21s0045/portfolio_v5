"use client";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import "./globals.css";
type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Grid container spacing={2} id ="navbar-navigation">
        <Grid item lg={6}></Grid>
        <Grid item lg={6}>
          <Grid container spacing={5} >
            <Grid item>
              <p>Activity</p>
            </Grid>
            <Grid item>
              <p>Info</p>
            </Grid>
            <Grid item>
              <p>Project</p>
              </Grid>
            <Grid item>
              <p>Resume</p>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div>{children}</div>
    </div>
  );
}

export default Layout;

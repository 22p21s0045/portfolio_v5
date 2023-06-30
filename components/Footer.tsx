import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import packagejson from "../package.json";
import "../styles/Footer.css";
function Footer() {
  const Dat = new Date().getFullYear();
  return (
    <div>
      <Grid container style={{ position: "relative", left: "5%" }}>
        <Grid item lg={4}>
          <Grid container spacing={2}>
            <Grid item>
              <p>UI</p>
            </Grid>
            <Grid item>
              <p>Frontend</p>
            </Grid>
            <Grid item>
              <p>Backend</p>
            </Grid>
            <Grid item>
              <p>Photography</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4}>
          <Grid container spacing={0}>
            <Grid item lg={4}>
              <div>
                <Image
                  src="/footer/github.svg"
                  alt="Logo"
                  width={26}
                  height={27}
                  style={{ position: "relative", left: "80%" }}
                />
              </div>
            </Grid>
            <Grid item lg={4}>
              <Image
                src="/footer/linkedin.svg"
                alt="Logo"
                width={30}
                height={30}
                style={{ position: "relative" }}
              />
            </Grid>
            <Grid item lg={4}>
              <Image
                src="/footer/flickr.svg"
                alt="Logo"
                width={25}
                height={27}
                style={{ position: "relative", left: "-78%" }}
              />
            </Grid>
            <Grid item lg={12} style={{ position: "relative", left: "25%" }}>
              <p>VERSION {packagejson.version}</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4}>
          <p>© Akkarawit Hatyai {Dat}</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;

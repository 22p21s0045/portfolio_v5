"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid";
import { useSpring, animated } from "@react-spring/web";

export default function Home() {
  const animatedStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });
  return (
    <div>
      <Grid container>
        <Grid item lg={6}>
          <animated.div style={animatedStyles}>
            <Image
              src={"/svg/landing/hello.svg"}
              alt="Logo"
              width={465}
              height={135}
              style={{ position: "relative", top: "18px" }}
            />
            <h1 style={{ color: "white" }}>Hello worldssss</h1>
          </animated.div>
        </Grid>
        <Grid item lg={6}></Grid>
      </Grid>
      <h1>ggg</h1>
    </div>
  );
}

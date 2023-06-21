"use client";
import { Grid } from "./component";
import Image from "next/image";
import { useInView, animated, useSpring, easings } from "@react-spring/web";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import Lottie from "lottie-react";
import astronaut from "../public/lottie/astronaut-fix.json";
import activity from "../public/lottie/activity.json";
export default function Home() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    config: {
      easing: easings.easeOutQuad,
      duration: 6000,
    },
  });
  const springs_2 = useSpring({
    from: { opacity: 0, x: -100 },
    to: { opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -300 },
    config: {
      easing: easings.easeOutQuad,
      duration: 1000,
    },
  });

  useEffect(() => {
    if (inView3) {
      ref3.current.play();
      console.log("in view 3");
    } else {
      ref3.current.pause();
    }
  }, [inView3]);
  useEffect(() => {
    if (inView4) {
      ref4.current.play();
      console.log("in view 4");
    } else {
      ref4.current.pause();
    }
  }, [inView4]);
  return (
    <div>
      <Grid container>
        <Grid
          item
          lg={6}
          style={{ position: "relative", left: "10%", top: "80px" }}
        >
          <div>
            <svg
              width="465"
              height="135"
              viewBox="0 0 290.003 71.751"
              xmlns="http://www.w3.org/2000/svg"
              id="hello"
            >
              <g
                id="svgGroup"
                strokeLinecap="round"
                fillRule="evenodd"
                fontSize="9pt"
                stroke="#f4e7e7"
                strokeWidth="0.25mm"
                fill="#f4e7e7"
              >
                <path
                  d="M 247.802 71.11 L 235.069 71.11 L 235.069 0.641 L 256.53 0.641 L 262.456 43.603 L 268.342 0.641 L 290.003 0.641 L 290.003 71.11 L 277.11 71.11 L 277.11 20.341 L 269.022 71.11 L 256.37 71.11 L 247.802 20.341 L 247.802 71.11 Z M 14.014 71.11 L 0 71.11 L 0 0.641 L 14.014 0.641 L 14.014 25.826 L 20.66 25.826 L 20.66 0.641 L 34.674 0.641 L 34.674 71.11 L 20.66 71.11 L 20.66 39.159 L 14.014 39.159 L 14.014 71.11 Z M 70.028 71.11 L 40.92 71.11 L 40.92 0.641 L 69.107 0.641 L 69.107 14.255 L 55.254 14.255 L 55.254 27.988 L 68.547 27.988 L 68.547 41.241 L 55.254 41.241 L 55.254 57.377 L 70.028 57.377 L 70.028 71.11 Z M 103.261 71.11 L 74.673 71.11 L 74.673 0.641 L 88.767 0.641 L 88.767 59.098 L 103.261 59.098 L 103.261 71.11 Z M 135.853 71.11 L 107.265 71.11 L 107.265 0.641 L 121.358 0.641 L 121.358 59.098 L 135.853 59.098 L 135.853 71.11 Z M 139.296 51.891 L 139.296 18.419 A 29.579 29.579 0 0 1 139.728 13.189 Q 140.678 7.906 143.72 4.685 A 14.144 14.144 0 0 1 150.181 0.842 Q 152.429 0.185 155.127 0.041 A 29.051 29.051 0 0 1 156.673 0.001 A 24.776 24.776 0 0 1 161.715 0.481 Q 164.77 1.117 167.089 2.592 A 13.283 13.283 0 0 1 169.625 4.685 A 14.936 14.936 0 0 1 172.942 10.454 Q 174.05 13.89 174.05 18.419 L 174.05 51.891 Q 174.05 58.431 171.999 62.883 A 15.563 15.563 0 0 1 169.585 66.646 A 14.417 14.417 0 0 1 161.844 71.188 A 22.333 22.333 0 0 1 156.673 71.751 A 22.388 22.388 0 0 1 151.558 71.201 Q 147.472 70.243 144.69 67.613 A 14.133 14.133 0 0 1 143.76 66.646 A 16.5 16.5 0 0 1 140.519 60.748 Q 139.721 58.265 139.444 55.253 A 36.686 36.686 0 0 1 139.296 51.891 Z M 211.927 71.11 L 198.313 71.11 L 198.313 0.641 L 211.927 0.641 L 211.927 71.11 Z M 159.996 52.572 L 159.996 18.178 A 12.972 12.972 0 0 0 159.886 16.409 Q 159.411 12.973 156.873 12.973 Q 153.448 12.973 153.352 18.004 A 15.429 15.429 0 0 0 153.35 18.299 L 153.35 52.652 A 21.605 21.605 0 0 0 153.4 54.177 Q 153.51 55.73 153.863 56.717 A 4.156 4.156 0 0 0 154.15 57.357 A 2.641 2.641 0 0 0 156.037 58.71 A 3.995 3.995 0 0 0 156.793 58.778 A 2.588 2.588 0 0 0 159.232 57.153 Q 159.826 55.948 159.958 53.848 A 20.352 20.352 0 0 0 159.996 52.572 Z M 227.102 26.106 L 220.055 26.106 L 216.051 0.641 L 230.145 0.641 L 227.102 26.106 Z"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            </svg>
          </div>
          <div style={{ position: "relative", left: "22%", top: "5%" }}>
            <svg
              width="417.285"
              height="85.938"
              viewBox="0 0 417.285 85.938"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="akkarawit"
                strokeLinecap="round"
                fillRule="evenodd"
                fontSize="9pt"
                stroke="#4148da"
                strokeWidth="0.25mm"
                fill="#f4e7e7"
              >
                <path
                  d="M 316.357 85.938 L 295.41 85.938 L 286.182 0 L 302.979 0 L 307.715 54.248 L 312.549 0 L 328.564 0 L 333.154 54.248 L 337.744 0 L 354.736 0 L 345.361 85.938 L 324.756 85.938 L 320.459 44.58 L 316.357 85.938 Z M 67.969 85.938 L 50.879 85.938 L 50.879 0 L 67.871 0 L 67.871 34.424 L 75.879 0 L 93.164 0 L 83.545 39.356 L 95.166 85.938 L 77.344 85.938 L 67.969 44.336 L 67.969 85.938 Z M 115.186 85.938 L 98.096 85.938 L 98.096 0 L 115.088 0 L 115.088 34.424 L 123.096 0 L 140.381 0 L 130.762 39.356 L 142.383 85.938 L 124.561 85.938 L 115.186 44.336 L 115.186 85.938 Z M 211.23 85.938 L 193.848 85.938 L 193.848 0 L 220.215 0 Q 226.807 0 230.176 3.003 A 13.422 13.422 0 0 1 233.519 7.692 A 18.993 18.993 0 0 1 234.692 11.402 A 48.58 48.58 0 0 1 235.477 16.483 Q 235.749 19.106 235.817 22.064 A 87.332 87.332 0 0 1 235.84 24.073 A 45.299 45.299 0 0 1 235.648 28.382 Q 235.255 32.482 234.058 35.303 A 9.842 9.842 0 0 1 229.014 40.451 A 14.034 14.034 0 0 1 227.344 41.114 Q 231.396 41.944 233.032 45.142 Q 234.318 47.656 234.593 51.332 A 27.984 27.984 0 0 1 234.668 53.418 L 234.668 85.938 L 217.725 85.938 L 217.725 52.295 Q 217.725 48.536 216.187 47.632 A 5.063 5.063 0 0 0 215.042 47.156 Q 213.906 46.824 212.233 46.75 A 22.742 22.742 0 0 0 211.23 46.729 L 211.23 85.938 Z M 16.699 85.938 L 0 85.938 L 8.301 0 L 37.451 0 L 45.605 85.938 L 29.346 85.938 L 28.125 72.071 L 17.773 72.071 L 16.699 85.938 Z M 159.668 85.938 L 142.969 85.938 L 151.27 0 L 180.42 0 L 188.574 85.938 L 172.314 85.938 L 171.094 72.071 L 160.742 72.071 L 159.668 85.938 Z M 255.859 85.938 L 239.16 85.938 L 247.461 0 L 276.611 0 L 284.766 85.938 L 268.506 85.938 L 267.285 72.071 L 256.934 72.071 L 255.859 85.938 Z M 407.08 85.938 L 389.893 85.938 L 389.893 16.504 L 379.688 16.504 L 379.688 0 L 417.285 0 L 417.285 16.504 L 407.08 16.504 L 407.08 85.938 Z M 375.684 85.938 L 359.082 85.938 L 359.082 0 L 375.684 0 L 375.684 85.938 Z M 22.266 14.649 L 18.994 58.35 L 26.807 58.35 L 23.047 14.649 L 22.266 14.649 Z M 165.234 14.649 L 161.963 58.35 L 169.775 58.35 L 166.016 14.649 L 165.234 14.649 Z M 261.426 14.649 L 258.154 58.35 L 265.967 58.35 L 262.207 14.649 L 261.426 14.649 Z M 211.328 15.918 L 211.328 31.836 L 215.479 31.836 A 2.741 2.741 0 0 0 217.977 30.242 Q 218.729 28.886 218.95 26.374 A 26.311 26.311 0 0 0 219.043 24.073 A 51.129 51.129 0 0 0 219.006 22.038 Q 218.872 18.702 218.262 17.481 A 2.683 2.683 0 0 0 216.321 16.016 A 4.682 4.682 0 0 0 215.332 15.918 L 211.328 15.918 Z"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            </svg>
          </div>
          <div style={{ position: "relative", left: "30%", top: "10%" }}>
            <svg
              width="453.663"
              height="87.502"
              viewBox="0 0 453.663 87.502"
              xmlns="http://www.w3.org/2000/svg"
              id="sittiprakan"
            >
              <g
                id="svgGroup"
                strokeLinecap="round"
                fillRule="evenodd"
                fontSize="9pt"
                stroke="#b30a0a"
                strokeWidth="0.25mm"
                fill="#f4e7e7"
              >
                <path
                  d="M 428.272 86.72 L 411.475 86.72 L 411.475 0.782 L 429.151 0.782 L 437.061 41.944 L 437.061 0.782 L 453.663 0.782 L 453.663 86.72 L 436.866 86.72 L 428.272 43.751 L 428.272 86.72 Z M 332.813 86.72 L 315.723 86.72 L 315.723 0.782 L 332.716 0.782 L 332.716 35.206 L 340.723 0.782 L 358.008 0.782 L 348.389 40.138 L 360.01 86.72 L 342.188 86.72 L 332.813 45.118 L 332.813 86.72 Z M 0.001 62.989 L 0.001 54.591 L 16.993 54.591 L 16.993 65.333 A 15.962 15.962 0 0 0 17.081 67.068 Q 17.275 68.838 17.896 69.996 A 3.033 3.033 0 0 0 20.097 71.594 A 4.92 4.92 0 0 0 21.046 71.68 A 6.294 6.294 0 0 0 22.189 71.584 Q 23.629 71.317 24.293 70.313 A 4.21 4.21 0 0 0 24.769 69.287 Q 25.101 68.263 25.175 66.737 A 18.956 18.956 0 0 0 25.196 65.821 A 33.177 33.177 0 0 0 25.086 63.037 Q 24.972 61.686 24.739 60.531 A 15.733 15.733 0 0 0 24.415 59.205 A 14.21 14.21 0 0 0 22.597 55.351 A 17.146 17.146 0 0 0 21.705 54.127 Q 19.776 51.71 16.358 48.487 L 8.643 41.163 Q 0.001 33.009 0.001 22.511 A 37.89 37.89 0 0 1 0.499 16.154 Q 1.081 12.738 2.344 10.019 A 17.475 17.475 0 0 1 5.103 5.763 A 16.463 16.463 0 0 1 13.735 0.689 Q 16.444 0.022 19.665 0.001 A 32.2 32.2 0 0 1 19.874 0.001 A 34.75 34.75 0 0 1 25.939 0.492 Q 29.172 1.067 31.674 2.313 A 14.377 14.377 0 0 1 36.646 6.3 Q 41.602 12.598 41.602 25.44 L 24.122 25.44 L 24.122 19.532 Q 24.122 17.774 23.121 16.798 A 3.342 3.342 0 0 0 21.456 15.926 A 4.926 4.926 0 0 0 20.411 15.821 Q 18.36 15.821 17.408 16.969 A 4.034 4.034 0 0 0 16.568 18.759 A 5.735 5.735 0 0 0 16.456 19.923 Q 16.456 21.729 17.432 23.829 Q 18.409 25.929 21.29 28.663 L 31.202 38.184 A 57.234 57.234 0 0 1 36.671 44.166 Q 39.161 47.315 40.675 51.49 Q 41.949 55.004 42.15 59.816 A 44.32 44.32 0 0 1 42.188 61.671 A 53.488 53.488 0 0 1 41.752 68.726 Q 41.257 72.438 40.201 75.489 A 23.454 23.454 0 0 1 37.72 80.64 A 14.148 14.148 0 0 1 29.818 86.454 Q 26.498 87.501 22.169 87.501 A 37.314 37.314 0 0 1 16.069 87.037 Q 12.838 86.501 10.304 85.342 A 15.112 15.112 0 0 1 5.201 81.641 A 17.561 17.561 0 0 1 1.932 76.006 Q 0.121 71.111 0.008 63.954 A 61.019 61.019 0 0 1 0.001 62.989 Z M 236.915 86.72 L 219.532 86.72 L 219.532 0.782 L 245.899 0.782 Q 252.491 0.782 255.86 3.785 A 13.422 13.422 0 0 1 259.204 8.473 A 18.993 18.993 0 0 1 260.377 12.183 A 48.58 48.58 0 0 1 261.161 17.264 Q 261.433 19.888 261.501 22.845 A 87.332 87.332 0 0 1 261.524 24.854 A 45.299 45.299 0 0 1 261.332 29.164 Q 260.939 33.263 259.742 36.085 A 9.842 9.842 0 0 1 254.699 41.233 A 14.034 14.034 0 0 1 253.028 41.895 Q 257.081 42.725 258.717 45.924 Q 260.002 48.438 260.277 52.114 A 27.984 27.984 0 0 1 260.352 54.2 L 260.352 86.72 L 243.409 86.72 L 243.409 53.077 Q 243.409 49.317 241.871 48.414 A 5.063 5.063 0 0 0 240.726 47.938 Q 239.59 47.606 237.917 47.532 A 22.742 22.742 0 0 0 236.915 47.511 L 236.915 86.72 Z M 281.544 86.72 L 264.844 86.72 L 273.145 0.782 L 302.296 0.782 L 310.45 86.72 L 294.19 86.72 L 292.969 72.852 L 282.618 72.852 L 281.544 86.72 Z M 377.296 86.72 L 360.596 86.72 L 368.897 0.782 L 398.048 0.782 L 406.202 86.72 L 389.942 86.72 L 388.721 72.852 L 378.37 72.852 L 377.296 86.72 Z M 95.118 86.72 L 77.93 86.72 L 77.93 17.286 L 67.725 17.286 L 67.725 0.782 L 105.323 0.782 L 105.323 17.286 L 95.118 17.286 L 95.118 86.72 Z M 134.669 86.72 L 117.481 86.72 L 117.481 17.286 L 107.276 17.286 L 107.276 0.782 L 144.874 0.782 L 144.874 17.286 L 134.669 17.286 L 134.669 86.72 Z M 189.21 86.72 L 172.315 86.72 L 172.315 0.782 L 195.02 0.782 A 25.939 25.939 0 0 1 199.572 1.157 Q 202.08 1.605 204.09 2.586 A 13.369 13.369 0 0 1 206.324 3.956 Q 210.499 7.13 212.305 12.989 A 37.871 37.871 0 0 1 213.572 18.76 Q 214.112 22.521 214.112 26.954 A 68.08 68.08 0 0 1 213.833 33.294 Q 213.543 36.387 212.952 39.077 A 38.022 38.022 0 0 1 212.598 40.553 A 20.039 20.039 0 0 1 210.9 44.97 A 14.865 14.865 0 0 1 207.203 49.513 A 12.827 12.827 0 0 1 202.85 51.791 Q 200.989 52.371 198.742 52.576 A 28.191 28.191 0 0 1 196.192 52.686 L 189.21 52.686 L 189.21 86.72 Z M 63.721 86.72 L 47.12 86.72 L 47.12 0.782 L 63.721 0.782 L 63.721 86.72 Z M 165.479 86.72 L 148.878 86.72 L 148.878 0.782 L 165.479 0.782 L 165.479 86.72 Z M 287.11 15.43 L 283.839 59.132 L 291.651 59.132 L 287.891 15.43 L 287.11 15.43 Z M 382.862 15.43 L 379.591 59.132 L 387.403 59.132 L 383.643 15.43 L 382.862 15.43 Z M 189.21 16.456 L 189.21 37.257 L 190.186 37.257 A 13.028 13.028 0 0 0 192.164 37.119 Q 195.215 36.648 196.046 34.571 A 11.807 11.807 0 0 0 196.612 32.645 Q 197.048 30.589 197.11 27.647 A 47.324 47.324 0 0 0 197.12 26.661 A 36.648 36.648 0 0 0 197.022 23.892 Q 196.823 21.276 196.218 19.519 A 9.745 9.745 0 0 0 196.07 19.117 A 3.892 3.892 0 0 0 193.422 16.758 Q 192.43 16.456 191.114 16.456 L 189.21 16.456 Z M 237.012 16.7 L 237.012 32.618 L 241.163 32.618 A 2.741 2.741 0 0 0 243.661 31.024 Q 244.413 29.667 244.635 27.156 A 26.311 26.311 0 0 0 244.727 24.854 A 51.129 51.129 0 0 0 244.69 22.82 Q 244.556 19.483 243.946 18.263 A 2.683 2.683 0 0 0 242.005 16.798 A 4.682 4.682 0 0 0 241.016 16.7 L 237.012 16.7 Z"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            </svg>
          </div>
        </Grid>
        <Grid item lg={6} style={{ position: "relative", left: 200 }}>
          <Image
            src={"/svg/landing/men.png"}
            alt="Logo"
            width={555}
            height={740}
            quality={100}
            unoptimized={true}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} md={6} sm={6} style={{ position: "relative" }}>
          <animated.div ref={ref} style={{ ...springs }}>
            <Image
              src={"/svg/skill/fix.png"}
              alt="skill"
              width={1118}
              height={1134}
              quality={100}
            />
          </animated.div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={6}>
          <Grid container justifyContent="center" style={{ gap: 20 }}>
            <Grid
              item
              lg={4}
              style={{
                position: "relative",
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: 8,
                height: 350,

                flexWrap: "wrap",
                width: "100%",
                padding: 20,
              }}
              justifyContent="center"
              display="flex"
            >
              <div>
                <Image
                  src={"/svg/skill/web-icon.png"}
                  alt="Logo"
                  width={45}
                  height={45}
                  style={{ position: "relative", top: "18px" }}
                  quality={100}
                />
              </div>
              <p
                style={{
                  fontSize: "1.33rem",
                  fontWeight: 400,
                  color: "#000",
                  fontFamily: "Anton",
                  width: "100%",
                  height: "5%",
                }}
              >
                Frontend Development
              </p>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.52)",
                  fontWeight: 500,
                  position: "relative",
                  top: "-10%",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In augue senectus erat
                quis nibh odio dapibus vestibulum penatibus.
              </p>
            </Grid>
            <Grid
              item
              lg={4}
              style={{
                position: "relative",
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: 8,
                height: "40%",

                flexWrap: "wrap",
                width: "100%",
                padding: 20,
              }}
              justifyContent="center"
              display="flex"
            >
              <div>
                <Image
                  src={"/svg/skill/ux-icon.png"}
                  alt="Logo"
                  width={45}
                  height={45}
                  style={{ position: "relative", top: "18px" }}
                  quality={100}
                />
              </div>
              <p
                style={{
                  fontSize: "1.33rem",
                  fontWeight: 400,
                  color: "#000",
                  fontFamily: "Anton",
                  width: "100%",
                  height: "5%",
                }}
              >
                UX/UI Design
              </p>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.52)",
                  fontWeight: 500,
                  position: "relative",
                  marginTop: "-2%",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In augue senectus erat
                quis nibh odio dapibus vestibulum penatibus.
              </p>
            </Grid>
            <Grid
              item
              lg={4}
              style={{
                position: "relative",
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: 8,

                flexWrap: "wrap",
                width: "100%",
                padding: 20,
                height: "10%",
              }}
              justifyContent="center"
              display="flex"
            >
              <div>
                <Image
                  src={"/svg/skill/backend-icon.png"}
                  alt="Logo"
                  width={45}
                  height={45}
                  style={{ position: "relative", top: "18px" }}
                  quality={100}
                />
              </div>
              <p
                style={{
                  fontSize: "1.33rem",
                  fontWeight: 400,
                  color: "#000",
                  fontFamily: "Anton",
                  width: "100%",
                  height: "5%",
                }}
              >
                Backend Development
              </p>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.52)",
                  fontWeight: 500,
                  marginTop: "-2%",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In augue senectus erat
                quis nibh odio dapibus vestibulum penatibus.
              </p>
            </Grid>
            <Grid
              item
              lg={4}
              style={{
                position: "relative",
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: 8,

                flexWrap: "wrap",
                width: "100%",
                padding: 20,
                marginTop: "-8%",
                gap: 20,
              }}
              justifyContent="center"
              display="flex"
            >
              <div>
                <Image
                  src={"/svg/skill/photograph-icon.png"}
                  alt="Logo"
                  width={45}
                  height={45}
                  style={{ position: "relative", top: "18px" }}
                  quality={100}
                />
              </div>
              <p
                style={{
                  fontSize: "1.33rem",
                  fontWeight: 400,
                  color: "#000",
                  fontFamily: "Anton",
                  width: "100%",
                }}
              >
                Photography
              </p>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.52)",
                  fontWeight: 500,
                  position: "relative",
                  top: "-15%",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In augue senectus erat
                quis nibh odio dapibus vestibulum penatibus.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <animated.div style={{ ...springs_2 }} ref={ref2}>
            <Image
              src={"/svg/skill/tablets.png"}
              alt="Logo"
              width={555}
              height={740}
              quality={100}
              unoptimized={true}
            />
          </animated.div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12}>
          <animated.div ref={ref3}>
            <Lottie
              animationData={astronaut}
              style={{ width: "100%" }}
              loop={false}
              lottieRef={ref3}
              autoPlay={false}
            />
          </animated.div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12}>
          <animated.div ref={ref4}>
            <Lottie
              animationData={activity}
              style={{ width: "100%" }}
              loop={false}
              lottieRef={ref4}
              autoPlay={false}
            />
          </animated.div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12}>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
}

"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { useState } from "react";
import { Settings } from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SxProps } from "@mui/material";
import { primaryColor } from "@/utils/constants";

const images = [
  "/image/basin.png",
  "/image/faucet.png",
  "/image/bathtub.png",
  "/image/aboutus.png",
  "/image/vanity.png",
];

function ImagePreview() {
  const [current, setCurrent] = useState(images[0]);

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
  };

  return (
    <Grid
      size={{ xs: 6 }}
      sx={{
        ".slick-slide": {
          pr: 3,
        },
      }}
    >
      <Box position={"relative"} height={600} mb={3}>
        <Image
          src={current}
          alt="product cover"
          fill
          style={{ borderRadius: 10, objectFit: "cover" }}
        />
      </Box>

      <Slider {...settings}>
        {images.map((item, index) => {
          return (
            <Box
              sx={{
                ...imageContainerStyle,
                border: `2px solid ${
                  item === current ? primaryColor : "transparent"
                }`,
              }}
              key={index}
              onClick={() => setCurrent(item)}
            >
              <Image
                src={item}
                alt="product cover"
                fill
                style={{ borderRadius: 10, objectFit: "cover" }}
              />
            </Box>
          );
        })}
      </Slider>
    </Grid>
  );
}

const imageContainerStyle: SxProps = {
  position: "relative",
  height: 100,
  cursor: "pointer",
  transition: "border 0.5s",
  borderRadius: 3,
};

export default ImagePreview;

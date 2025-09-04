"use client";

import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { primaryColor } from "@/utils/constants";

const products = [
  {
    image: "/image/faucet.png",
    name: "Vòi nước",
    description: "Chất liệu inox chống gỉ, bền bỉ theo thời gian.",
    price: 4000000,
  },
  {
    image: "/image/faucet.png",
    name: "Vòi nước",
    description: "Chất liệu inox chống gỉ, bền bỉ theo thời gian.",
    price: 4000000,
  },
  {
    image: "/image/faucet.png",
    name: "Vòi nước",
    description: "Chất liệu inox chống gỉ, bền bỉ theo thời gian.",
    price: 4000000,
  },
  {
    image: "/image/faucet.png",
    name: "Vòi nước",
    description: "Chất liệu inox chống gỉ, bền bỉ theo thời gian.",
    price: 4000000,
  },
];

function RelatedProducts() {
  return (
    <Box px={3}>
      <Box sx={titleStyle}>Sản Phẩm Cùng Loại</Box>

      <Grid container mt={3} spacing={3}>
        {products.map((item, index) => {
          return (
            <Grid size={{ xs: 3 }} key={index}>
              <Card sx={containerStyle}>
                <CardMedia
                  sx={imageStyle}
                  image={item.image}
                  title={item.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div" color={primaryColor}>
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

const titleStyle: SxProps = {
  fontSize: "1.8rem",
  fontWeight: 500,
};

const imageStyle: SxProps = {
  height: 200,
};

const containerStyle: SxProps = {
  borderRadius: "10px",
  cursor: "pointer",
  position: "relative",
  top: 0,
  transition: "top ease 0.5s",
  ":hover": {
    top: "-20px",
  },
};

export default RelatedProducts;

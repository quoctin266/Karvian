"use client";

import Product from "@/components/product/Product";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
});

function ProductList() {
  return (
    <>
      <Grid container mt={3} p={3} spacing={6}>
        {products.map((item, index) => {
          return <Product key={index} {...item} />;
        })}
      </Grid>

      <Grid container justifyContent={"center"} py={6}>
        <ThemeProvider theme={theme}>
          <Pagination count={10} shape="rounded" color="primary" />
        </ThemeProvider>
      </Grid>
    </>
  );
}

export default ProductList;

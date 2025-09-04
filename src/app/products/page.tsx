import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { SxProps } from "@mui/material";
import Toolbar from "@/components/Toolbar/Toolbar";
import ProductList from "@/components/productList/ProductList";

export default function Products() {
  return (
    <Box sx={{ backgroundColor: "#fffbf6ff" }} py={7}>
      <Container maxWidth="lg">
        <Grid container px={3}>
          <Grid size={{ xs: 12 }} sx={titleStyle}>
            Khám Phá Bộ Sưu Tập
          </Grid>
          <Grid size={{ xs: 12 }} sx={subtitleStyle}>
            Tìm kiếm những sản phẩm phòng tắm hiện đại, tinh tế và bền bỉ, đáp
            ứng mọi nhu cầu của bạn.
          </Grid>
        </Grid>

        <Toolbar />

        <ProductList />
      </Container>
    </Box>
  );
}

const titleStyle: SxProps = {
  fontSize: "3rem",
  fontWeight: 500,
  mb: 3,
  color: "#0d2538",
  width: "30%",
  lineHeight: 1.3,
};

const subtitleStyle: SxProps = {
  fontSize: "1.1rem",
  mb: 6,
  color: "#0d2538",
};

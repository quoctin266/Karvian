import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { SxProps } from "@mui/material";
import ImagePreview from "@/components/imagePreview/ImagePreview";
import ProductInfo from "@/components/productInfo/ProductInfo";
import Advantages from "@/components/advantages/Advantages";
import ProductTabs from "@/components/productTabs/ProductTabs";
import RelatedProducts from "@/components/relatedProducts/RelatedProducts";

export default async function Details({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <Box py={6}>
      <Container maxWidth="lg">
        <Grid container px={3} justifyContent={"space-between"} mb={6}>
          <ImagePreview />

          <ProductInfo />
        </Grid>

        <ProductTabs />

        <Advantages />

        <RelatedProducts />
      </Container>
    </Box>
  );
}

const imageStyle: SxProps = {
  borderRadius: 3,
};

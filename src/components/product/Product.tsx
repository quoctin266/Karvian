import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { Button, SxProps } from "@mui/material";
import { currencyFormatter } from "@/utils/functions";
import { primaryColor } from "@/utils/constants";
import { useRouter } from "@bprogress/next";

function Product(props: IProductProps) {
  const { description, image, name, price } = props;

  const router = useRouter();

  return (
    <Grid size={{ xs: 4 }} onClick={() => router.push("/details/abc")}>
      <Card sx={containerStyle}>
        <Chip label="SALE" sx={saleTagStyle} />
        <CardMedia sx={imageStyle} image={image} title={name} />
        <CardContent>
          <Typography variant="h6" component="div" color={primaryColor}>
            {name}
          </Typography>

          <Typography
            variant="subtitle2"
            component="div"
            fontWeight={400}
            my={1}
            color={primaryColor}
          >
            {description}
          </Typography>

          <Typography variant="h6" component="div" color="#ce9d3a">
            {currencyFormatter(price)}
          </Typography>

          <Button
            variant="contained"
            sx={addButtonStyle}
            fullWidth
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Liên Hệ
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

const containerStyle: SxProps = {
  borderRadius: "10px",
  cursor: "pointer",
  backgroundColor: "#fffbf6",
  position: "relative",
  top: 0,
  transition: "top ease 0.5s",
  ":hover": {
    top: "-20px",
  },
};

const imageStyle: SxProps = {
  height: 250,
};

const saleTagStyle: SxProps = {
  position: "absolute",
  top: 20,
  left: 20,
  borderRadius: 2,
  backgroundColor: "#e15c39",
  color: "white",
  fontWeight: 500,
  fontSize: "1rem",
};

const addButtonStyle: SxProps = {
  backgroundColor: "#0d2538",
  textTransform: "capitalize",
  fontSize: "1.1rem",
  py: 1,
  mt: 2,
};

export default Product;

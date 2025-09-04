import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { SxProps } from "@mui/material";

function Application(props: IApplicationProps) {
  const { title, image } = props;

  return (
    <Grid size={{ xs: 4 }}>
      <Card sx={containerStyle}>
        <CardMedia sx={imageStyle} image={image} title={title} />
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            fontWeight={400}
            textAlign={"center"}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

const containerStyle: SxProps = {
  borderRadius: "10px",
  cursor: "pointer",
  boxShadow: "none",
};

const imageStyle: SxProps = {
  height: 250,
  transition: "all .3s ease",
  ":hover": {
    transform: "scale(1.1)",
  },
};

export default Application;

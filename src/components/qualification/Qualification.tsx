import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Qualification(props: IQualificationProps) {
  const { icon, subtitle, title } = props;
  return (
    <Grid size={{ xs: 3 }} sx={containerStyle}>
      {icon}
      <Box sx={titleStyle}>{title}</Box>
      <Box sx={subtitleStyle}>{subtitle}</Box>
    </Grid>
  );
}

const containerStyle: SxProps = {
  textAlign: "center",
  backgroundColor: "#e9f0f3",
  borderRadius: "15px",
  py: 4,
};

const titleStyle: SxProps = {
  fontSize: "1.3rem",
  mt: 1,
  mb: 2,
};

const subtitleStyle: SxProps = {
  lineHeight: "2rem",
  px: 4,
};

export default Qualification;

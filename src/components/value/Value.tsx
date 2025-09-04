import { primaryColor } from "@/utils/constants";

import { SxProps } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Value(props: IValueProps) {
  const { icon, subtitle, title } = props;

  return (
    <Grid size={{ xs: 4 }}>
      <Grid container>
        <Grid size={{ xs: 3 }}>{icon}</Grid>

        <Grid size={{ xs: 9 }}>
          <Box sx={titleStyle}>{title}</Box>
          <Box sx={textStyle}>{subtitle}</Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

const textStyle: SxProps = {
  color: primaryColor,
  lineHeight: 2,
};

const titleStyle: SxProps = {
  fontSize: "1.5rem",
  color: primaryColor,
  width: "60%",
  mb: 1,
};

export default Value;

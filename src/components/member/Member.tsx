import { primaryColor } from "@/utils/constants";
import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Member(props: IMemberProps) {
  const { image, name, position } = props;

  return (
    <Grid size={{ xs: 4 }}>
      <img
        src={image}
        alt="member image"
        width={"100%"}
        style={{
          objectFit: "cover",
          borderRadius: "15px",
        }}
      />

      <Box sx={nameStyle}>{name}</Box>
      <Box>{position}</Box>
    </Grid>
  );
}

const nameStyle: SxProps = {
  fontWeight: 500,
  fontSize: "1.1rem",
  color: primaryColor,
  mt: 1,
  mb: 0.5,
};

export default Member;

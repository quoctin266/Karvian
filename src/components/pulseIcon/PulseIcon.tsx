import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

function PulseIcon(props: IPulseIconProps) {
  const { backgroundColor, icon } = props;

  return (
    <Box sx={{ backgroundColor, ...containerStyle }}>
      <Box sx={spanStyle} component={"span"}></Box>
      {icon}
    </Box>
  );
}

const containerStyle: SxProps = {
  width: 80,
  height: 80,
  borderRadius: "50%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const spanStyle: SxProps = {
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  background: "inherit",
  opacity: 0.8,

  "@keyframes pulseAnimate": {
    "100%": {
      opacity: 0,
      transform: "scale(2.3)",
    },
  },

  animation: "pulseAnimate 1s ease-out infinite",
};

export default PulseIcon;

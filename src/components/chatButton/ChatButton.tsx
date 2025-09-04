"use client";

import { primaryColor } from "@/utils/constants";
import { SxProps } from "@mui/material";
import Fab from "@mui/material/Fab";

function ChatButton() {
  return (
    <Fab
      variant="extended"
      sx={buttonStyle}
      onClick={() =>
        window.open("https://m.me/CursusBusiness/", "_blank")?.focus()
      }
    >
      <img src={"/image/fb.png"} width={30} />
      <span
        style={{
          textTransform: "capitalize",
          color: "white",
          fontSize: "1rem",
        }}
      >
        Chat
      </span>
    </Fab>
  );
}

const buttonStyle: SxProps = {
  position: "fixed",
  right: "3%",
  bottom: "25%",
  backgroundColor: primaryColor,
  gap: 1,
  "&:hover": {
    backgroundColor: "#1a4161ff",
  },

  "@keyframes moveUpDown": {
    "0%, 100%": {
      transform: "translateY(100px)",
    },
    "50%": {
      transform: "translateY(120px)",
    },
  },

  animation: "moveUpDown 1s linear infinite",
};

export default ChatButton;

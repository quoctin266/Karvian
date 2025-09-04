"use client";

import Container from "@mui/material/Container";
import { Box, Grid, SxProps } from "@mui/material";
import { primaryColor } from "@/utils/constants";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Copyright() {
  return (
    <Box p={3} sx={containerStyle}>
      <Container maxWidth="lg">
        <Box px={3}>
          <Box sx={titleStyle}>Karvian</Box>
          <Grid container justifyContent={"center"}>
            <Box sx={subtitleStyle}>
              Copyright <CopyrightIcon /> 2025 Karvian. All Rights Reserved
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

const containerStyle: SxProps = {
  backgroundColor: primaryColor,
  py: 6,
  textAlign: "center",
};

const titleStyle: SxProps = {
  fontSize: "2rem",
  color: "white",
  fontWeight: 500,
  mb: 2,
};

const subtitleStyle: SxProps = {
  color: "white",
  display: "flex",
  gap: 0.5,
};

export default Copyright;

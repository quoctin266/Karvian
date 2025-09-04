"use client";

import Container from "@mui/material/Container";
import { Box, Grid, SxProps } from "@mui/material";
import { primaryColor } from "@/utils/constants";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box p={3} sx={containerStyle}>
      <Container maxWidth="lg">
        <Grid container columnSpacing={3} px={3}>
          <Grid container flexDirection={"column"} size={{ xs: 3 }} gap={1}>
            <Box sx={titleStyle}>CHĂM SÓC KHÁCH HÀNG</Box>
            <Box sx={linkStyle}>Liên Hệ</Box>
            <Box sx={linkStyle}>Giao Hàng & Vận Chuyển</Box>
            <Box sx={linkStyle}>Đổi Trả</Box>
          </Grid>

          <Grid container flexDirection={"column"} size={{ xs: 3 }} gap={1}>
            <Box sx={titleStyle}>CÔNG TY</Box>
            <Box sx={linkStyle}>Giới Thiệu</Box>
            <Box sx={linkStyle}>Thương Hiệu Của Chúng Tôi</Box>
            <Box sx={linkStyle}>Tuyển Dụng</Box>
          </Grid>

          <Grid container flexDirection={"column"} size={{ xs: 3 }} gap={1}>
            <Box sx={titleStyle}>SHOWROOM</Box>
            <Box lineHeight={2} color={primaryColor}>
              Bờ Quan 8, Phường Hòa Quý, Quận Ngũ Hành Sơn, TP. Đà Nẵng, Việt
              Nam
            </Box>
          </Grid>

          <Grid
            container
            size={{ xs: 3 }}
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={4}
          >
            <FacebookOutlinedIcon
              fontSize="large"
              sx={iconStyle}
              onClick={() =>
                window
                  .open(
                    "https://www.facebook.com/profile.php?id=61579869263030#",
                    "_blank"
                  )
                  ?.focus()
              }
            />
            <YouTubeIcon fontSize="large" sx={iconStyle} />
            <InstagramIcon fontSize="large" sx={iconStyle} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const containerStyle: SxProps = {
  backgroundColor: "#fff3df",
  py: 6,
};

const titleStyle: SxProps = {
  fontSize: "1.1rem",
  color: primaryColor,
  fontWeight: 500,
};

const linkStyle: SxProps = {
  cursor: "pointer",
  color: primaryColor,
  ":hover": {
    textDecoration: "underline",
  },
};

const iconStyle: SxProps = {
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
};

export default Footer;

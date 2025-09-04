import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { SxProps, Toolbar } from "@mui/material";
import { primaryColor } from "@/utils/constants";
import Map from "@/components/map/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactForm from "@/components/contactForm/ContactForm";

export default function Contact() {
  return (
    <Box sx={{ backgroundColor: "#fffbf6ff", pb: 6 }}>
      {/* Hero section */}
      <Box sx={{ backgroundColor: "#2d3e48", height: 380 }}>
        <Container maxWidth="lg">
          <Box position={"relative"} height={450} mx={3}>
            <Image
              src={`/image/hero.png`}
              alt="hero image"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            <Box sx={heroContentStyle}>
              <Box sx={heroTitleStyle}>Chúng tôi luôn sẵn sàng hỗ trợ</Box>
              <Box sx={heroSubtitleStyle}>
                Hãy liên hệ với chúng tôi qua điện thoại, email hoặc fanpage của
                chúng tôi.
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Hero section */}
      <Toolbar />

      <Box mt={5}>
        <Container maxWidth="lg">
          <Box sx={titleStyle} px={3}>
            Thông Tin Liên Hệ
          </Box>
          <Grid container mx={3} justifyContent={"space-between"}>
            <Grid size={{ xs: 6 }}>
              <Grid container gap={3} mb={3}>
                <PhoneIcon />
                <Box>
                  <Box sx={textStyle}>Điện Thoại</Box>
                  <Box>(123) 456-7690</Box>
                </Box>
              </Grid>

              <Grid container gap={3} mb={3}>
                <EmailIcon />
                <Box>
                  <Box sx={textStyle}>Email</Box>
                  <Box>into@sanitaryware.com</Box>
                </Box>
              </Grid>

              <Grid container gap={3} mb={3}>
                <LocationOnIcon />
                <Grid size={{ xs: 4 }}>
                  <Box sx={textStyle}>Địa Chỉ</Box>
                  <Box lineHeight={1.8}>
                    Bờ Quan 8, Phường Hòa Quý, Quận Ngũ Hành Sơn, TP. Đà Nẵng,
                    Việt Nam
                  </Box>
                </Grid>
              </Grid>

              <Map />
            </Grid>

            <Grid size={{ xs: 5 }}>
              <Box sx={textStyle}>Giờ làm việc</Box>
              <Grid container my={1}>
                <Grid size={{ xs: 4 }}>Thứ Hai - Thứ Sáu</Grid>
                <Box>9:00 - 17:00</Box>
              </Grid>

              <Grid container mb={5}>
                <Grid size={{ xs: 4 }}>Thứ Bảy</Grid>
                <Box>10:00 - 15:00</Box>
              </Grid>

              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

const heroContentStyle: SxProps = {
  width: "35%",
  position: "absolute",
  left: "5%",
  top: "25%",
};

const heroTitleStyle: SxProps = {
  fontSize: "2.4rem",
  color: "white",
  mb: 2,
};

const heroSubtitleStyle: SxProps = {
  fontSize: "1.1rem",
  color: "white",
  lineHeight: 1.8,
  fontWeight: 300,
};

const titleStyle: SxProps = {
  fontSize: "2rem",
  fontWeight: 500,
  mb: 3,
  color: primaryColor,
};

const textStyle: SxProps = {
  fontSize: "1.1rem",
  fontWeight: 500,
  color: primaryColor,
  mb: 0.5,
};

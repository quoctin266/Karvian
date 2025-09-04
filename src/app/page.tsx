import Container from "@mui/material/Container";
import { Box, Grid, SxProps, Toolbar } from "@mui/material";
import Image from "next/image";
import Button from "@mui/material/Button";
import DiamondIcon from "@mui/icons-material/Diamond";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import LanguageIcon from "@mui/icons-material/Language";
import BuildIcon from "@mui/icons-material/Build";
import Qualification from "@/components/qualification/Qualification";
import Collection from "@/components/collection/Collection";
import Application from "@/components/appilcation/Application";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Link from "next/link";

const collections = [
  {
    title: "Bồn tắm",
    image: "/image/bathtub.png",
  },
  {
    title: "Chậu rửa",
    image: "/image/basin.png",
  },
  {
    title: "Vòi nước",
    image: "/image/faucet.png",
  },
  {
    title: "Tủ lavabo",
    image: "/image/vanity.png",
  },
];

const qualifications = [
  {
    icon: <DiamondIcon sx={{ fontSize: "5rem" }} />,
    title: "Chất Lượng Cao",
    subtitle: "Vật liệu cao cấp và tay nghề tinh xảo.",
  },
  {
    icon: <TipsAndUpdatesIcon sx={{ fontSize: "5rem" }} />,
    title: "Thiết Kế Sáng Tạo",
    subtitle: "Chú trọng tính hiện đại và tiện dụng.",
  },
  {
    icon: <LanguageIcon sx={{ fontSize: "5rem" }} />,
    title: "Tiêu Chuẩn Quốc Tế",
    subtitle: "Sản phẩm được chứng nhận đạt chuẩn quốc tế.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: "5rem" }} />,
    title: "Tùy Chỉnh",
    subtitle: "Giải pháp thiết kế phù hợp theo nhu cầu của bạn.",
  },
];

const applications = [
  {
    title: "Biệt thự",
    image: "/image/villas.png",
  },
  {
    title: "Khu nghỉ dưỡng",
    image: "/image/resorts.png",
  },
  {
    title: "Khách sạn",
    image: "/image/hotels.png",
  },
];

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#fffbf6ff" }}>
      {/* Hero section */}
      <Box sx={{ backgroundColor: "#2d3e48", height: 420 }}>
        <Container maxWidth="lg">
          <Box position={"relative"} height={500} mx={3}>
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
              <Box sx={heroTextStyle}>
                Nâng tầm phòng tắm thành tác phẩm nghệ thuật
              </Box>
              <Button
                variant="contained"
                sx={heroButtonStyle}
                href="/products"
                LinkComponent={Link}
              >
                Khám Phá Ngay
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Hero section */}

      <Toolbar />

      {/* Abous us section */}
      <Box mt={7}>
        <Container maxWidth="lg">
          <Grid container px={3} justifyContent={"space-between"}>
            <Grid size={{ xs: 4.5 }}>
              <Box position={"relative"} height={300}>
                <Image
                  src={`/image/aboutus.png`}
                  alt="hero image"
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 6.5 }} py={3}>
              <Box sx={titleStyle}>Về Chúng Tôi</Box>
              <Box sx={aboutUsContentStyle}>
                Mang đến sự tinh tế cho không gian sống hiện đại, chúng tôi
                chuyên cung cấp thiết bị vệ sinh cao cấp kết hợp giữa thiết kế
                vượt thời gian và chất lượng tuyệt hảo. Cam kết đổi mới và tay
                nghề tinh xảo của chúng tôi đảm bảo mỗi sản phẩm đều nâng tầm
                phòng tắm của bạn.
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Abous us section */}

      {/* Featured collections section */}
      <Box my={5} px={3}>
        <Container maxWidth="lg">
          <Box sx={titleStyle} px={3}>
            Bộ Sưu Tập Nổi Bật
          </Box>
          <Grid
            container
            justifyContent={"space-between"}
            columnSpacing={3}
            px={3}
          >
            {collections.map((item, index) => {
              return <Collection key={index} {...item} />;
            })}
          </Grid>
        </Container>
      </Box>
      {/* Featured collections section */}

      {/* Why choose us section */}
      <Box py={3} px={3} sx={{ backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Box sx={titleStyle} px={3}>
            Vì Sao Chọn Chúng Tôi
          </Box>
          <Grid
            container
            justifyContent={"space-between"}
            columnSpacing={3}
            px={3}
          >
            {qualifications.map((item, index) => {
              return <Qualification key={index} {...item} />;
            })}
          </Grid>
        </Container>
      </Box>
      {/* Why choose us section */}

      {/* Applications section */}
      <Box py={3} px={3} sx={{ backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Box sx={titleStyle} px={3}>
            Ứng Dụng
          </Box>
          <Grid
            container
            justifyContent={"space-between"}
            columnSpacing={3}
            px={3}
          >
            {applications.map((item, index) => {
              return <Application key={index} {...item} />;
            })}
          </Grid>
        </Container>
      </Box>
      {/* Applications section */}

      {/* Subscribe section */}
      <Box p={3} pb={6} sx={{ backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Grid container sx={emailSignupStyle}>
            <Grid size={{ xs: 9.5 }}>
              <Box sx={titleStyle}>Đăng ký nhận tin mới nhất từ chúng tôi</Box>
              <Box>
                Hãy là người đầu tiên biết về sản phẩm mới và các ưu đãi độc
                quyền.
              </Box>
            </Grid>

            <Grid size={{ xs: 2.5 }}>
              <FormControl sx={{ mb: 1 }} variant="outlined" fullWidth>
                <OutlinedInput placeholder="Nhập Email" />
              </FormControl>

              <Button variant="contained" fullWidth sx={subscribeButtonStyle}>
                Đăng Ký
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Subscribe section */}

      {/* Contact section */}
      <Box p={3}>
        <Container maxWidth="lg">
          <Grid container justifyContent={"center"}>
            <Grid sx={contactContainerStyle}>
              <Box sx={titleStyle}>Nâng Cấp Phòng Tắm Của Bạn Ngay Hôm Nay</Box>
              <Box sx={subtitleStyle}>
                Biến giấc mơ về một phòng tắm hoàn hảo thành hiện thực — bắt đầu
                từ bây giờ.
              </Box>
              <Button
                variant="contained"
                sx={contactButtonStyle}
                href="/contact"
                LinkComponent={Link}
              >
                Liên Hệ Ngay
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* contact section */}
    </Box>
  );
}

const heroContentStyle: SxProps = {
  width: "35%",
  position: "absolute",
  left: "5%",
  top: "15%",
};

const heroTextStyle: SxProps = {
  fontSize: "2.5rem",
  color: "white",
  mb: 2,
};

const heroButtonStyle: SxProps = {
  backgroundColor: "#eae3d8",
  color: "#63615eff",
  textTransform: "capitalize",
};

const titleStyle: SxProps = {
  fontSize: "2rem",
  fontWeight: 500,
  mb: 2,
  color: "#0d2538",
};

const aboutUsContentStyle: SxProps = {
  lineHeight: 2,
  fontSize: "1.1rem",
  color: "#0d2538",
};

const emailSignupStyle: SxProps = {
  backgroundColor: "#f8f8f8ff",
  mx: 3,
  p: 4,
};

const subscribeButtonStyle: SxProps = {
  backgroundColor: "#0d2538",
  textTransform: "capitalize",
  fontSize: "1.1rem",
  py: 1,
};

const contactContainerStyle: SxProps = {
  textAlign: "center",
  pt: 3,
  pb: 6,
};

const subtitleStyle: SxProps = {
  color: "#0d2538",
  fontSize: "1.1rem",
  my: 4,
};

const contactButtonStyle: SxProps = {
  backgroundColor: "#0d2538",
  textTransform: "capitalize",
  fontSize: "1.2rem",
  py: 1,
  px: 4,
};

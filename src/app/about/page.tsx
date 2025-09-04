import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Image from "next/image";
import { SxProps, Toolbar } from "@mui/material";
import { primaryColor } from "@/utils/constants";
import Value from "@/components/value/Value";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import CompostOutlinedIcon from "@mui/icons-material/CompostOutlined";
import Member from "@/components/member/Member";
import Link from "next/link";

const values = [
  {
    icon: <StarBorderRoundedIcon sx={{ fontSize: "4rem" }} />,
    title: "Tay Nghề Chất Lượng",
    subtitle:
      "Chúng tôi tập trung vào sự tỉ mỉ trong chế tác để đảm bảo các tiêu chuẩn chất lượng cao nhất.",
  },
  {
    icon: <TipsAndUpdatesOutlinedIcon sx={{ fontSize: "4rem" }} />,
    title: "Đổi mới & Thiết kế",
    subtitle:
      "Chúng tôi luôn đón đầu xu hướng, áp dụng thiết kế sáng tạo kết hợp công nghệ tiên tiến để tạo ra sản phẩm độc đáo.",
  },
  {
    icon: <CompostOutlinedIcon sx={{ fontSize: "4rem" }} />,
    title: "Phát triển bền vững",
    subtitle:
      "Chúng tôi cam kết sử dụng quy trình sản xuất thân thiện với môi trường và chọn lựa vật liệu bền vững, chất lượng.",
  },
];

const members = [
  {
    image: "/image/sample-avatar.jpg",
    name: "Sarah L. Johnson",
    position: "Người sáng lập & CEO",
  },
  {
    image: "/image/sample-avatar.jpg",
    name: "Michael T. Smith",
    position: "Trưởng bộ phận Thiết kế",
  },
  {
    image: "/image/sample-avatar.jpg",
    name: "Emily R. Davis",
    position: "Quản lý vận hành",
  },
];

export default function About() {
  return (
    <Box sx={{ backgroundColor: "#fffbf6ff" }}>
      {/* Hero section */}
      <Box sx={{ backgroundColor: "#2d3e48", height: 380 }}>
        <Container maxWidth="lg">
          <Box position={"relative"} height={450} mx={3}>
            <Image
              src={`/image/abouthero.png`}
              alt="hero image"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            <Box sx={heroContentStyle}>
              <Box sx={heroTitleStyle}>
                Chuyên Cung Cấp Thiết Bị Vệ Sinh Chất Lượng Cao
              </Box>
              <Box sx={heroSubtitleStyle}>
                Chúng tôi cam kết cung cấp các thiết bị vệ sinh cao cấp, sáng
                tạo, giúp nâng tầm không gian sống của bạn.
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Hero section */}
      <Toolbar />

      {/* Story section */}
      <Box mt={7}>
        <Container maxWidth="lg">
          <Grid container px={3}>
            <Box sx={titleStyle}>Sơ Lược Về Chúng Tôi</Box>

            <Grid container justifyContent={"space-between"}>
              <Grid size={{ xs: 5.5 }} sx={textStyle}>
                Thành lập năm 2025, công ty chúng tôi bắt đầu với một sứ mệnh
                đơn giản: nâng tầm phòng tắm thành những tác phẩm nghệ thuật.
                Qua nhiều năm, chúng tôi đã phát triển từ một xưởng nhỏ trở
                thành nhà cung cấp các sản phẩm vệ sinh chất lượng cao hàng đầu.
              </Grid>

              <Grid size={{ xs: 5.5 }} sx={textStyle}>
                Hành trình của chúng tôi được dẫn dắt bởi cam kết về sự xuất sắc
                và niềm đam mê với thiết kế. Ngày nay, chúng tôi tiếp tục đổi
                mới và mở rộng danh mục sản phẩm, luôn giữ vững các giá trị cốt
                lõi.
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Story section */}

      {/* Missions and values section */}
      <Box mt={5}>
        <Container maxWidth="lg">
          <Grid container px={3}>
            <Box sx={titleStyle}>Sứ mệnh & Giá trị</Box>

            <Grid container columnSpacing={6}>
              {values.map((item, index) => {
                return <Value key={index} {...item} />;
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Missions and values section */}

      {/* Members section */}
      <Box mt={5}>
        <Container maxWidth="lg">
          <Grid container px={3}>
            <Box sx={titleStyle}>Thành Viên Công Ty</Box>

            <Grid container columnSpacing={10}>
              {members.map((item, index) => {
                return <Member key={index} {...item} />;
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Members section */}

      <Box textAlign={"center"}>
        <Button
          variant="contained"
          sx={browseButtonStyle}
          href="/products"
          LinkComponent={Link}
        >
          Xem Sản Phẩm
        </Button>
      </Box>
    </Box>
  );
}

const heroContentStyle: SxProps = {
  width: "35%",
  position: "absolute",
  left: "5%",
  top: "15%",
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
  mb: 2,
  color: primaryColor,
};

const textStyle: SxProps = {
  lineHeight: 2.3,
  color: primaryColor,
};

const browseButtonStyle: SxProps = {
  backgroundColor: primaryColor,
  textTransform: "capitalize",
  fontSize: "1.1rem",
  py: 1,
  px: 5,
  my: 10,
  fontWeight: 300,
};

"use client";

import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import { primaryColor } from "@/utils/constants";
import { SxProps } from "@mui/material";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LabelOutlined from "@mui/icons-material/LabelOutlined";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import StraightenOutlined from "@mui/icons-material/StraightenOutlined";
import ScaleOutlined from "@mui/icons-material/ScaleOutlined";
import PlumbingOutlined from "@mui/icons-material/PlumbingOutlined";
import TapasOutlined from "@mui/icons-material/TapasOutlined";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
});

function ProductTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box px={3}>
      <Box sx={titleStyle}>Chi Tiết Sản Phẩm</Box>

      <Grid container justifyContent={"space-between"}>
        <Grid size={{ xs: 6 }}>
          <List sx={{ mb: 3 }}>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon>
                <PlayArrowSharpIcon sx={{ color: primaryColor }} />
              </ListItemIcon>
              <ListItemText primary="Chất liệu: Gốm" />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon>
                <PlayArrowSharpIcon sx={{ color: primaryColor }} />
              </ListItemIcon>
              <ListItemText primary="Kích thước: 100 x 50 x 75cm" />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon>
                <PlayArrowSharpIcon sx={{ color: primaryColor }} />
              </ListItemIcon>
              <ListItemText primary="Trọng lượng: 5 Kg" />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon>
                <PlayArrowSharpIcon sx={{ color: primaryColor }} />
              </ListItemIcon>
              <ListItemText primary="Phân loại: Chậu rửa" />
            </ListItem>
          </List>
        </Grid>

        <Grid size={{ xs: 5 }}>
          <Grid container columnSpacing={3} mb={2}>
            <Grid>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon>
                  <GppGoodOutlinedIcon sx={{ color: primaryColor }} />
                </ListItemIcon>
                <ListItemText primary="Bảo hành" />
              </ListItem>
            </Grid>

            <Grid>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon>
                  <WaterDropOutlinedIcon sx={{ color: primaryColor }} />
                </ListItemIcon>
                <ListItemText primary="Tiết kiệm nước" />
              </ListItem>
            </Grid>
          </Grid>

          <Grid container columnSpacing={2.5}>
            <Grid>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon>
                  <BuildOutlinedIcon sx={{ color: primaryColor }} />
                </ListItemIcon>
                <ListItemText primary="Dễ lắp đặt" />
              </ListItem>
            </Grid>

            <Grid>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon>
                  <EnergySavingsLeafOutlinedIcon sx={{ color: primaryColor }} />
                </ListItemIcon>
                <ListItemText primary="Thân thiện với môi trường" />
              </ListItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box mb={3}>
        <ThemeProvider theme={theme}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Mô Tả" value="1" sx={tabLabelStyle} />
                <Tab label="Thông Số Kỹ Thuật" value="2" sx={tabLabelStyle} />
              </TabList>
            </Box>
            <TabPanel value="1">
              Chậu rửa hình oval hiện đại được làm từ gốm sứ cao cấp, mang lại
              độ bền vượt trội cùng vẻ ngoài tinh tế, hiện đại. Bề mặt nhẵn, dễ
              lau chùi giúp việc vệ sinh trở nên đơn giản. Thiết kế nhỏ gọn
              nhưng sang trọng, phù hợp hoàn hảo cho các phòng tắm hiện đại, vừa
              tiện dụng vừa thẩm mỹ.
            </TabPanel>

            <TabPanel value="2">
              <List sx={{ mb: 3 }}>
                <Grid container alignItems={"center"}>
                  <Grid size={{ xs: 3 }}>
                    <ListItem sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <LabelOutlined sx={{ color: primaryColor }} />
                      </ListItemIcon>
                      <ListItemText primary="Mã Sản Phẩm:" />
                    </ListItem>
                  </Grid>

                  <Box>WB-302</Box>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid size={{ xs: 3 }}>
                    <ListItem sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <CategoryOutlinedIcon sx={{ color: primaryColor }} />
                      </ListItemIcon>
                      <ListItemText primary="Chất Liệu:" />
                    </ListItem>
                  </Grid>

                  <Box>Sứ cao cấp phủ men</Box>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid size={{ xs: 3 }}>
                    <ListItem sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <PaletteOutlined sx={{ color: primaryColor }} />
                      </ListItemIcon>
                      <ListItemText primary="Bề Mặt:" />
                    </ListItem>
                  </Grid>

                  <Box>Trắng bóng</Box>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid size={{ xs: 3 }}>
                    <ListItem sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <StraightenOutlined sx={{ color: primaryColor }} />
                      </ListItemIcon>
                      <ListItemText primary="Kích thước (D x R x C):" />
                    </ListItem>
                  </Grid>

                  <Box>550 x 420 x 150 mm</Box>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid size={{ xs: 3 }}>
                    <ListItem sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <ScaleOutlined sx={{ color: primaryColor }} />
                      </ListItemIcon>
                      <ListItemText primary="Độ Sâu Chậu:" />
                    </ListItem>
                  </Grid>

                  <Box>120 mm</Box>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid size={{ xs: 3 }}>
                    <ListItem sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <PlumbingOutlined sx={{ color: primaryColor }} />
                      </ListItemIcon>
                      <ListItemText primary="Kiểu Lắp Đặt:" />
                    </ListItem>
                  </Grid>

                  <Box>Treo tường / Lắp đặt âm bàn</Box>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid size={{ xs: 3 }}>
                    <ListItem sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <TripOriginOutlinedIcon sx={{ color: primaryColor }} />
                      </ListItemIcon>
                      <ListItemText primary="Lỗ Vòi:" />
                    </ListItem>
                  </Grid>

                  <Box>1 Lỗ</Box>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid size={{ xs: 3 }}>
                    <ListItem sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <GppGoodOutlinedIcon sx={{ color: primaryColor }} />
                      </ListItemIcon>
                      <ListItemText primary="Bảo Hành:" />
                    </ListItem>
                  </Grid>

                  <Box>5 Năm</Box>
                </Grid>
              </List>
            </TabPanel>
          </TabContext>
        </ThemeProvider>
      </Box>
    </Box>
  );
}

const titleStyle: SxProps = {
  fontSize: "1.8rem",
  fontWeight: 500,
};

const tabLabelStyle: SxProps = {
  textTransform: "capitalize",
  fontSize: "1.1rem",
};

export default ProductTabs;

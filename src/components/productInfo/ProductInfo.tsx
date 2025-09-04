"use client";

import { primaryColor } from "@/utils/constants";
import { currencyFormatter } from "@/utils/functions";
import { Button, SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addProduct } from "@/lib/redux/slices/productSlice";
import { useToast } from "@/utils/toast";

const colors = ["#ccc", "#808080ff", "#000000ff"];

function ProductInfo() {
  const [selected, setSelected] = useState("#ccc");

  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id: uuidv4(),
        name: "Lavabo Oval Hiện Đại",
        price: 4000000,
        description: "Gốm cao cấp | Dễ dàng vệ sinh | Thiết kế hiện đại",
        image: "/image/basin.png",
      })
    );

    toast.success("Thêm sản phẩm thành công");
  };

  return (
    <Grid size={{ xs: 5 }} py={3}>
      <Box sx={nameStyle}>Lavabo Oval Hiện Đại</Box>
      <Box sx={subtitleStyle}>
        Gốm cao cấp | Dễ dàng vệ sinh | Thiết kế hiện đại
      </Box>
      <Box sx={priceStyle}>{currencyFormatter(4000000)}</Box>
      <Box sx={statusStyle}>Còn hàng</Box>
      <Grid container alignItems={"center"} gap={4} mb={3}>
        <Box fontWeight={500} fontSize={"1.1rem"}>
          Màu sắc
        </Box>

        <Grid container columnSpacing={2}>
          {colors.map((item, index) => {
            return (
              <Box
                sx={{
                  ...circleContainerStyle,
                  border: `2px solid ${
                    selected === item ? primaryColor : "transparent"
                  }`,
                }}
                key={index}
                onClick={() => setSelected(item)}
              >
                <Box
                  sx={{
                    ...circleStyle,
                    backgroundColor: item,
                  }}
                ></Box>
              </Box>
            );
          })}
        </Grid>
      </Grid>

      <List sx={{ mb: 3 }}>
        <ListItem sx={{ pl: 0 }}>
          <ListItemIcon>
            <LocalShippingOutlinedIcon sx={{ color: primaryColor }} />
          </ListItemIcon>
          <ListItemText primary="Giao hàng toàn quốc" />
        </ListItem>
        <ListItem sx={{ pl: 0 }}>
          <ListItemIcon>
            <ConstructionOutlinedIcon sx={{ color: primaryColor }} />
          </ListItemIcon>
          <ListItemText primary="Lắp đặt tận nơi theo yêu cầu" />
        </ListItem>
        <ListItem sx={{ pl: 0 }}>
          <ListItemIcon>
            <PhoneForwardedOutlinedIcon sx={{ color: primaryColor }} />
          </ListItemIcon>
          <ListItemText primary="Liên hệ: 0123456789" />
        </ListItem>
      </List>

      <Button
        variant="contained"
        sx={addButtonStyle}
        onClick={handleAddProduct}
      >
        Thêm Vào Danh Sách
      </Button>
    </Grid>
  );
}

const nameStyle: SxProps = {
  fontSize: "2.5rem",
  fontWeight: 500,
};

const subtitleStyle: SxProps = {
  fontSize: "1.1rem",
  my: 2,
};

const priceStyle: SxProps = {
  fontSize: "1.5rem",
  fontWeight: 500,
  color: "#ce9d3a",
  mb: 2,
};

const statusStyle: SxProps = {
  fontSize: "1.1rem",
  color: "#44794a",
  mb: 3,
};

const circleContainerStyle: SxProps = {
  p: 0.2,
  borderRadius: "50%",
  cursor: "pointer",
  transition: "border 0.3s",
};

const circleStyle: SxProps = {
  borderRadius: "50%",
  width: 50,
  height: 50,
};

const addButtonStyle: SxProps = {
  backgroundColor: primaryColor,
  textTransform: "capitalize",
  fontSize: "1.1rem",
  py: 1,
  px: 5,
  fontWeight: 300,
};

export default ProductInfo;

"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useState } from "react";
import { SxProps } from "@mui/material";
import Link from "next/link";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Badge from "@mui/material/Badge";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import Grid from "@mui/material/Grid";
import { removeProduct } from "@/lib/redux/slices/productSlice";
import { useToast } from "@/utils/toast";
import ContactModal from "@/components/modal/ContactModal";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    title: "Trang Chủ",
    path: "/",
  },
  {
    title: "Giới Thiệu",
    path: "/about",
  },
  {
    title: "Bộ Sưu Tập",
    path: "/products",
  },
  {
    title: "Liên Hệ",
    path: "/contact",
  },
];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const dispatch = useAppDispatch();
  const toast = useToast();

  const { products } = useAppSelector((state) => state.product);

  const handleRemoveProduct = (id: string) => {
    dispatch(removeProduct(id));

    toast.success("Đã xoá sản phẩm khỏi danh sách");
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, cursor: "pointer" }}>
        <Link href={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          Karvian
        </Link>
      </Typography>

      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              href={item.path}
              LinkComponent={Link}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          boxShadow: "none",
          backgroundColor: "#2d3e48",
          py: 2,
          position: "static",
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                cursor: "pointer",
              }}
            >
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Karvian
              </Link>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" }, mr: 3 }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  sx={{ color: "#fff", fontWeight: 400, ml: 3 }}
                  href={item.path}
                  LinkComponent={Link}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            <Box flex={1} display={{ xs: "block", sm: "none" }}></Box>

            <IconButton onClick={handleClick}>
              <Badge badgeContent={products.length} color="warning">
                <AssignmentOutlinedIcon sx={{ color: "white" }} />
              </Badge>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              slotProps={{ paper: { sx: { py: 2, px: 1 } } }}
            >
              <Grid
                container
                px={2}
                mb={1}
                alignItems={"center"}
                justifyContent={"space-between"}
                minWidth={300}
              >
                <Box sx={titleStyle}>Sản Phẩm Đã Lưu</Box>
                <AssignmentTurnedInOutlinedIcon />
              </Grid>

              {products.map((item) => {
                return (
                  <MenuItem key={item.id}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      style={{ borderRadius: "8px" }}
                    />
                    <Box sx={nameStyle}>{item.name}</Box>
                    <IconButton onClick={() => handleRemoveProduct(item.id)}>
                      <CloseOutlinedIcon sx={{ color: "gray" }} />
                    </IconButton>
                  </MenuItem>
                );
              })}

              {products.length !== 0 ? (
                <Box px={2} mt={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={submitButtonStyle}
                    onClick={handleOpenModal}
                  >
                    Tạo Yêu Cầu
                  </Button>
                </Box>
              ) : (
                <Box px={2}>Chưa lưu sản phẩm nào</Box>
              )}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <ContactModal
        open={openModal}
        setOpen={setOpenModal}
        handleCloseMenu={handleClose}
      />
    </Box>
  );
}

const titleStyle: SxProps = {
  fontWeight: 500,
  fontSize: "1.4rem",
};

const nameStyle: SxProps = {
  fontWeight: 500,
  fontSize: "1.1rem",
  mx: 2,
  width: 100,
  textWrap: "wrap",
};

const submitButtonStyle: SxProps = {
  backgroundColor: "#0d2538",
  textTransform: "capitalize",
  fontSize: "1.1rem",
  py: 1,
};

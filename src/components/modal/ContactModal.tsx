"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { emailPattern, phonePattern, primaryColor } from "@/utils/constants";
import { SxProps } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";
import { useToast } from "@/utils/toast";
import { removeProduct } from "@/lib/redux/slices/productSlice";
import SuccessModal from "./SuccessModal";
import { useState } from "react";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
});

function ContactModal(props: IContactModalProps) {
  const { open, setOpen, handleCloseMenu } = props;

  const [openSuccess, setOpenSuccess] = useState(false);

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const toast = useToast();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);

    handleClose();
    handleCloseMenu();

    setOpenSuccess(true);
  };

  const handleClose = (
    event?: object,
    reason?: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason && reason === "backdropClick") return;
    setOpen(false);
    reset();
  };

  const handleRemoveProduct = (id: string) => {
    dispatch(removeProduct(id));

    toast.success("Đã xoá sản phẩm khỏi danh sách");
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{ paper: { component: "form", sx: { p: 2 } } }}
        fullWidth
        onSubmit={handleSubmit(onSubmit)}
        maxWidth="md"
      >
        <DialogTitle fontSize={"1.8rem"}>Thông Tin Liên Hệ</DialogTitle>
        <DialogContent>
          <Grid container justifyContent={"space-between"}>
            <Grid size={{ xs: 6.5 }}>
              <Box>
                <FormLabel error={!!errors.name}>Họ Và Tên</FormLabel>
                <TextField
                  placeholder="Họ và tên của bạn"
                  size="small"
                  autoFocus
                  type="text"
                  fullWidth
                  sx={{ mt: 1 }}
                  error={!!errors.name}
                  {...register("name", {
                    required: "* Tên không được bỏ trống",
                  })}
                />
                {errors.name && (
                  <FormHelperText error sx={{ mt: 1 }}>
                    {errors.name.message}
                  </FormHelperText>
                )}
              </Box>

              <Box my={2}>
                <FormLabel error={!!errors.email}>Email</FormLabel>
                <TextField
                  placeholder="Địa chỉ email của bạn"
                  size="small"
                  error={!!errors.email}
                  autoFocus
                  type="text"
                  fullWidth
                  sx={{ mt: 1 }}
                  {...register("email", {
                    required: "* Email không được bỏ trống",
                    pattern: {
                      value: emailPattern,
                      message: "Email không hợp lệ",
                    },
                  })}
                />
                {errors.email && (
                  <FormHelperText error>{errors.email.message}</FormHelperText>
                )}
              </Box>

              <Box my={2}>
                <FormLabel error={!!errors.phone}>Số Điện Thoại</FormLabel>
                <TextField
                  size="small"
                  placeholder="Số điện thoại của bạn"
                  error={!!errors.phone}
                  autoFocus
                  type="tel"
                  fullWidth
                  sx={{ mt: 1 }}
                  {...register("phone", {
                    required: "* Số điện thoại không được bỏ trống",
                    pattern: {
                      value: phonePattern,
                      message: "Số điện thoại không hợp lệ",
                    },
                  })}
                />
                {errors.phone && (
                  <FormHelperText error>{errors.phone.message}</FormHelperText>
                )}
              </Box>

              <Box my={2}>
                <FormLabel error={!!errors.message}>Lời Nhắn</FormLabel>
                <TextField
                  placeholder="Để lại lời nhắn của bạn"
                  error={!!errors.message}
                  autoFocus
                  multiline
                  rows={3}
                  type="text"
                  fullWidth
                  sx={{ mt: 1 }}
                  {...register("message")}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 4.5 }}>
              <Box sx={titleStyle}>Sản Phẩm Đã Chọn</Box>

              {products.map((item) => {
                return (
                  <Grid container key={item.id} sx={itemStyle}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={80}
                      width={80}
                      style={{ borderRadius: "8px" }}
                    />
                    <Box sx={nameStyle}>{item.name}</Box>

                    {products.length > 1 && (
                      <IconButton onClick={() => handleRemoveProduct(item.id)}>
                        <CloseOutlinedIcon
                          sx={{ color: "gray" }}
                          fontSize="small"
                        />
                      </IconButton>
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ mt: 3 }}>
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClose}
              sx={buttonStyle}
            >
              Hủy
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={buttonStyle}
            >
              Xác Nhận
            </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>

      <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
    </>
  );
}

const buttonStyle: SxProps = {
  textTransform: "capitalize",
  fontWeight: 300,
  px: 3,
};

const itemStyle: SxProps = {
  my: 2,
  p: 1.5,
  pr: 1,
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: 2,
};

const titleStyle: SxProps = {
  fontSize: "1.5rem",
};

const nameStyle: SxProps = {
  fontSize: "1.1rem",
  ml: 2,
  width: 100,
  textWrap: "wrap",
  flex: 1,
};

export default ContactModal;

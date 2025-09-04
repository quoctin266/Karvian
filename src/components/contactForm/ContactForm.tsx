"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { emailPattern, phonePattern, primaryColor } from "@/utils/constants";
import { SxProps } from "@mui/material";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function ContactForm() {
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <TextField
          placeholder="Họ Và Tên"
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
        <TextField
          placeholder="Email"
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
        <TextField
          placeholder="Số Điện Thoại"
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
        <TextField
          placeholder="Lời Nhắn"
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

      <Button
        fullWidth
        type="submit"
        variant="contained"
        sx={submitButtonStyle}
      >
        Gửi Tin Nhắn
      </Button>
    </form>
  );
}

const submitButtonStyle: SxProps = {
  backgroundColor: primaryColor,
  textTransform: "capitalize",
  py: 2,
  fontSize: "1rem",
};

export default ContactForm;

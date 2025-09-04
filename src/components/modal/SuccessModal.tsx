"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { SxProps } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import PulseIcon from "@/components/pulseIcon/PulseIcon";
import { primaryColor } from "@/utils/constants";
import Link from "next/link";

function SuccessModal(props: IModalProps) {
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      slotProps={{ paper: { sx: { py: 2, px: 3 } } }}
    >
      <DialogContent>
        <Grid container justifyContent={"center"} py={5}>
          <PulseIcon
            icon={<CheckIcon sx={{ color: "white", fontSize: "3rem" }} />}
            backgroundColor="#4caf50"
          />
        </Grid>

        <Box sx={titleStyle}>Đã Gửi Thông Tin Liên Hệ</Box>
        <Box sx={subtitleStyle}>
          Chúng tôi sẽ chủ động liên hệ với bạn trong thời gian sớm nhất.
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          fullWidth
          sx={buttonStyle}
          href="/products"
          LinkComponent={Link}
          onClick={handleClose}
        >
          Xem Thêm Sản Phẩm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const buttonStyle: SxProps = {
  textTransform: "capitalize",
  backgroundColor: primaryColor,
  fontSize: "1.1rem",
  py: 2,
};

const titleStyle: SxProps = {
  fontSize: "1.8rem",
  fontWeight: 500,
  textAlign: "center",
};

const subtitleStyle: SxProps = {
  fontSize: "1.1rem",
  textAlign: "center",
  mt: 1,
};

export default SuccessModal;

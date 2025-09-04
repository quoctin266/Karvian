import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { primaryColor } from "@/utils/constants";
import { SxProps } from "@mui/material";

function Advantages() {
  return (
    <Box px={3}>
      <Box sx={titleStyle}>Tại Sao Bạn Sẽ Thích Sản Phẩm Này</Box>

      <List sx={{ mb: 3 }}>
        <ListItem sx={{ pl: 0 }}>
          <ListItemIcon>
            <CheckOutlinedIcon sx={{ color: primaryColor }} />
          </ListItemIcon>
          <ListItemText primary="Chất liệu cao cấp, độ bền vượt trội" />
        </ListItem>
        <ListItem sx={{ pl: 0 }}>
          <ListItemIcon>
            <CheckOutlinedIcon sx={{ color: primaryColor }} />
          </ListItemIcon>
          <ListItemText primary="Thiết kế tối giản, sang trọng" />
        </ListItem>
        <ListItem sx={{ pl: 0 }}>
          <ListItemIcon>
            <CheckOutlinedIcon sx={{ color: primaryColor }} />
          </ListItemIcon>
          <ListItemText primary="Bảo hành chính hãng" />
        </ListItem>
      </List>
    </Box>
  );
}

const titleStyle: SxProps = {
  fontSize: "1.8rem",
  fontWeight: 500,
};

export default Advantages;

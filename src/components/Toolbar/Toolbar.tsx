"use client";

import { SxProps } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function Toolbar() {
  const [filterObj, setFilterObj] = useState({
    category: "0",
    price: "0",
    material: "0",
    color: "0",
  });

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setFilterObj({ ...filterObj, category: event.target.value });
  };

  return (
    <Grid container sx={containerStyle} justifyContent={"space-between"}>
      <Grid container gap={6}>
        <Grid>
          <FormControl fullWidth variant="standard">
            <Select
              disableUnderline
              IconComponent={ExpandMoreIcon}
              value={filterObj.category}
              onChange={handleChangeCategory}
              renderValue={(selected) => "Thể Loại"}
            >
              <MenuItem disabled value={"0"}>
                Thể Loại
              </MenuItem>
              <MenuItem value={"Bồn tắm"}>Bồn tắm</MenuItem>
              <MenuItem value={"Chậu rửa"}>Chậu rửa</MenuItem>
              <MenuItem value={"Vòi nước"}>Vòi nước</MenuItem>
              <MenuItem value={"Tủ lavabo"}>Tủ lavabo</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid>
          <FormControl fullWidth variant="standard">
            <Select
              disableUnderline
              defaultValue={0}
              IconComponent={ExpandMoreIcon}
              renderValue={(selected) => "Giá"}
            >
              <MenuItem disabled value={0}>
                Giá
              </MenuItem>
              <MenuItem value={1}>Dưới 1.000.000 VND</MenuItem>
              <MenuItem value={2}>1.000.000 - 5.000.000 VND</MenuItem>
              <MenuItem value={3}>5.000.000 - 10.000.000 VND</MenuItem>
              <MenuItem value={4}>Trên 10.000.000 VND</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid>
          <FormControl fullWidth variant="standard">
            <Select
              disableUnderline
              defaultValue={0}
              IconComponent={ExpandMoreIcon}
              renderValue={(selected) => "Chất Liệu"}
            >
              <MenuItem disabled value={0}>
                Chất Liệu
              </MenuItem>
              <MenuItem value={10}>Nhôm</MenuItem>
              <MenuItem value={20}>Sứ</MenuItem>
              <MenuItem value={30}>Sắt</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid>
          <FormControl fullWidth variant="standard">
            <Select
              disableUnderline
              defaultValue={0}
              IconComponent={ExpandMoreIcon}
              renderValue={(selected) => "Màu Sắc"}
            >
              <MenuItem disabled value={0}>
                Màu Sắc
              </MenuItem>
              <MenuItem value={10}>Trắng</MenuItem>
              <MenuItem value={20}>Đen</MenuItem>
              <MenuItem value={30}>Xám</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container gap={3}>
        <Grid mt={0.3}>Sắp xếp: </Grid>
        <Grid>
          <FormControl fullWidth variant="standard">
            <Select
              disableUnderline
              defaultValue={0}
              IconComponent={ExpandMoreIcon}
            >
              <MenuItem value={0}>Mới nhất</MenuItem>
              <MenuItem value={2}>Cũ nhất</MenuItem>
              <MenuItem value={3}>Giá thấp đến cao</MenuItem>
              <MenuItem value={4}>Giá cao đến thấp</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}

const containerStyle: SxProps = {
  border: "1px solid #ccc",
  borderRadius: 1,
  mx: 3,
  py: 2,
  px: 3,
};

export default Toolbar;

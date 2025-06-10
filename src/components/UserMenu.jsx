import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Tooltip,
  Fade,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { LogoutOutlined } from "@mui/icons-material";
import { logoutHandle } from "../services/auth";

const UserMenu = ({ userInfo }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      const res = await logoutHandle();
      console.log(res);
      dispatch(logout());
      handleClose();
    } catch (error) {}
  };

  return (
    <>
      <Tooltip title="Tài khoản">
        <IconButton onClick={handleAvatarClick}>
          <Avatar src={userInfo?.image || ""}>
            {userInfo?.name?.charAt(0).toUpperCase() || "U"}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          mt: 1.5,
          borderRadius: 2,
          minWidth: 180,
          overflow: "visible",
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.1))",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 18,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
          "&:focus": {
            outline: "none !important",
            boxShadow: "none",
          },
        }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Box px={2} py={1}>
          <Typography fontWeight={600} variant="body2">
            {userInfo?.username || "Tài khoản"}
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <LogoutOutlined fontSize="small" sx={{ mr: 1 }} />
          Đăng xuất
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;

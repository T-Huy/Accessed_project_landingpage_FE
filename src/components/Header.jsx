import { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import Login from "./Login";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const accessToken = useSelector((state) => state.user.access_token);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Box className="flex w-full justify-between">
        <div
          className="logo"
          style={{ fontSize: "1.6rem", fontWeight: "bold" }}
        >
          LUMINOVA
        </div>
        <Stack direction={"row"} spacing={2}>
          <Button
            variant="text"
            style={{
              textTransform: "none",
              fontWeight: "bold",
              color: "var(--color-primary)",
            }}
          >
            For business
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "var(--color-primary)",
              borderRadius: "12px",
              textTransform: "none",
              padding: "0 20px",
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
            Log in
          </Button>
        </Stack>
      </Box>
      <Login
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default Header;

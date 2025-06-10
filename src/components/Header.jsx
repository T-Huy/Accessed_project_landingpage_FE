import { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import Login from "./Login";
import UserMenu from "./UserMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  const isLoggedIn = Boolean(userInfo);
  const accessToken = useSelector((state) => state.user.accessToken);
  console.log(accessToken, userInfo);

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
          {isLoggedIn ? (
            <UserMenu userInfo={userInfo} />
          ) : (
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
          )}
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

import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import useLogin from "../hook/useLogin";
import { useSelector } from "react-redux";

const Login = ({ onClose, open }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { login, loading, error } = useLogin();
  const accessToken = useSelector((state) => state.user.accessToken);

  const handleClose = () => {
    onClose();
    setForm({
      username: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form); // login API trong custom hook
    console.log(res);
    if (res) {
      handleClose();
    } else {
      console.error("Login failed:", res);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      sx={{ "& .MuiPaper-root": { borderRadius: "20px" } }}
    >
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Đăng nhập
      </DialogTitle>

      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Username"
              name="username"
              fullWidth
              variant="standard"
              value={form.username}
              onChange={handleChange}
              type="text"
              required
            />
            <TextField
              label="Mật khẩu"
              name="password"
              type="password"
              fullWidth
              variant="standard"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                py: 1.4,
                backgroundColor: "var(--color-primary)",
                borderRadius: "8px",
              }}
              disabled={loading || form.username === "" || form.password === ""}
            >
              Đăng nhập
            </Button>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;

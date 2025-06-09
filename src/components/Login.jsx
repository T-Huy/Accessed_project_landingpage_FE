import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useLogin from "../hook/useLogin";

const Login = ({ onClose, open }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { login, loading, error } = useLogin();
  const handleClose = () => {
    onClose();
    setForm({
      email: "",
      password: "",
      remember: false,
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
    console.log("Login Data:", form);
    const res = await login(form);
    if (res) handleClose();
    // TODO: call login API
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
              label="Email"
              name="email"
              fullWidth
              variant="standard"
              value={form.email}
              onChange={handleChange}
              type="email"
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
              disabled={
                loading || form.email === "" || form.password === ""
                  ? true
                  : false
              }
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

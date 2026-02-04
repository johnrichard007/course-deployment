import { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Link,
  Divider
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ SIMPLE LOGIN CHECK
    if (!formData.email || !formData.password) {
      alert("Please enter email and password");
      return;
    }

    // ✅ Login success for ANY credentials
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <div className="login-container">
      <Paper elevation={4} className="login-paper" sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 5 }}>
        <Box textAlign="center" mb={2}>
          <LockIcon fontSize="large" />
          <Typography variant="h4">Login</Typography>
          <Typography variant="body2">Enter email and password</Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            InputProps={{
              startAdornment: <EmailIcon sx={{ mr: 1 }} />
            }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            InputProps={{
              startAdornment: <LockIcon sx={{ mr: 1 }} />
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>

        <Divider sx={{ my: 3 }}>OR</Divider>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{ mb: 1 }}
        >
          Login with Google
        </Button>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<FacebookIcon />}
        >
          Login with Facebook
        </Button>

        <Box textAlign="center" mt={2}>
          <Typography variant="body2">
            New user?{" "}
            <Link component="button" onClick={() => navigate("/register")}>
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

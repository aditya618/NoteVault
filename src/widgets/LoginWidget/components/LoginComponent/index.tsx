import { Box, Button, Typography } from "@mui/material";
import InputField from "../../../../common/InputField";

function LoginComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">Login</Typography>
      <InputField type="email" placeholder="Email" className="w-1/2" />
      <InputField
        type="password"
        placeholder="Password"
        className="w-1/2"
      />
      <Button className="w-1/2" variant="contained">
        Login
      </Button>
    </Box>
  );
}

export default LoginComponent;

import { Box, Button, TextField, Typography } from "@mui/material";
import InputField from "../../../../common/InputField";

function RegistrationComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">Register</Typography>
      <InputField placeholder="First Name" className="w-1/2" />
      <InputField placeholder="Last Name" className="w-1/2" />
      <InputField placeholder="Email" type="email" className="w-1/2" />
      <InputField placeholder="Password" type="password" className="w-1/2" />
      <InputField
        placeholder="Confirm Password"
        type="password"
        className="w-1/2"
      />

      <Button className="w-1/2" variant="contained">
        Login
      </Button>
    </Box>
  );
}

export default RegistrationComponent;

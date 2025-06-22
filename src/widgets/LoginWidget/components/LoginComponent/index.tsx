import { Box, Button, Typography } from "@mui/material";
import InputField from "../../../../common/InputField";
import { useState } from "react";
import { useDoLoginMutation } from "../../LoginWidgetApi";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doLogin] = useDoLoginMutation();

  const handleLogin = async () => {
    if(!email) return;
    if(!password) return;
    const loginPayload = {
      email,
      password
    }
    const res = await doLogin(loginPayload);
    console.log(res);
  }

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
      <InputField type="email" placeholder="Email" className="w-1/2" onValueChange={setEmail} />
      <InputField
        type="password"
        placeholder="Password"
        className="w-1/2"
        onValueChange={setPassword}
      />
      <Button onClick={handleLogin} className="w-1/2" variant="contained">
        Login
      </Button>
    </Box>
  );
}

export default LoginComponent;

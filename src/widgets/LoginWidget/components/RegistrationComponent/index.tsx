import { Box, Button, Typography } from "@mui/material";
import InputField from "../../../../common/InputField";
import { useReducer } from "react";
import { initialState, registrationReducer } from "./RegistrationFormState";
import { useCreateUserMutation } from "../../LoginWidgetApi";


function RegistrationComponent() {
  const [state, dispatch] = useReducer(registrationReducer, initialState);
  const [createUser] = useCreateUserMutation();

  const handleInputChange = (field: string, value: string) => {
    dispatch({ type: `SET_${field.toUpperCase()}`, payload: value });
  };

  const handleSubmit = async () => {
    if(state.password === state.confirmPassword) {
      const payload = {...state};
      delete payload.confirmPassword;
      await createUser(payload);
    }
    console.log("Registration Data:", state);
  };

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
      <InputField placeholder="First Name" onValueChange={(val) => handleInputChange('FIRST_NAME', val)} className="w-1/2" />
      <InputField placeholder="Last Name" onValueChange={(val) => handleInputChange('LAST_NAME', val)} className="w-1/2" />
      <InputField placeholder="Email" onValueChange={(val) => handleInputChange('EMAIL', val)} type="email" className="w-1/2" />
      <InputField placeholder="Password" type="password" onValueChange={(val) => handleInputChange('PASSWORD', val)} className="w-1/2" />
      <InputField
        placeholder="Confirm Password"
        type="password"
        className="w-1/2"
        onValueChange={(val) => handleInputChange('CONFIRM_PASSWORD', val)}
      />

      <Button className="w-1/2" variant="contained" onClick={handleSubmit}>
        Sign Up
      </Button>
    </Box>
  );
}

export default RegistrationComponent;

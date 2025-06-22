import { Link, Typography } from "@mui/material";
import BrandComponent from "./components/BrandComponent";
import LoginComponent from "./components/LoginComponent";
import "./loginStylings.scss";
import { useState } from "react";
import RegistrationComponent from "./components/RegistrationComponent";
import { useResponsive } from "../../hooks/useResponsive";

const LoginWidget = () => {
  const [newUser, setNewUser] = useState(false);
  const { isMobile } = useResponsive();

  const newUserText = (isNewUser: boolean) => {
    return (
      <Typography variant={isMobile ? "subtitle1" : "h6"} className="!text-center">
        { isNewUser ? 'Are you existing user? click here to' : 'Are you new user? click here to' }
        <Link
          onClick={() => setNewUser((prev) => !prev)}
          className="cursor-pointer !ml-2"
        >
          { isNewUser ? 'Login' : 'Sign Up' }
        </Link>
      </Typography>
    );
  }

  return (
    <div className="flex flex-col gap-7 justify-center">
      <img className="brand-logo" src="/src/assets/logo1.png" />
      <BrandComponent />
      {!newUser && (
        <>
          <LoginComponent />
          {newUserText(false)}
        </>
      )}
      {newUser && (
        <>
          <RegistrationComponent />
          {newUserText(true)}
        </>
      )}
    </div>
  );
};

export default LoginWidget;

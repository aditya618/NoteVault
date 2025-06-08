import BrandComponent from "./components/BrandComponent"
import LoginComponent from "./components/LoginComponent"
import './loginStylings.scss';

const LoginWidget = () => {
  return (
    <div className="flex flex-col gap-7 justify-center">
        <img className="brand-logo" src="/src/assets/logo1.png" />
        <BrandComponent />
        <LoginComponent />
    </div>
  )
}

export default LoginWidget
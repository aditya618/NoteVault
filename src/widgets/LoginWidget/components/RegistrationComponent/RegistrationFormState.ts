import { RegistrationFormType } from "../../LoginWidget.types";

export const initialState: RegistrationFormType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function registrationReducer(state: RegistrationFormType, action: { type: string; payload: string; }) {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}
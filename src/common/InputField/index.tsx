import { TextField } from "@mui/material";
import { InputFieldProps } from "./types";

function InputField(props: InputFieldProps) {
  const {
    type = "text",
    placeholder = "",
    required = false,
    className = "",
    onValueChange = () => {},
  } = props;
  return (
    <TextField
      required={required}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={(e) => onValueChange(e.target.value)}
      sx={{
        "& .MuiOutlinedInput-root": {
            height: "40px",
        }
      }}
    />
  );
}

export default InputField;

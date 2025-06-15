import { TextField } from "@mui/material";

type InputFieldType = "text" | "email" | "password";

interface InputFieldProps {
  type?: InputFieldType;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

function InputField(props: InputFieldProps) {
  const {
    type = "text",
    placeholder = "",
    required = false,
    className = "",
  } = props;
  return (
    <TextField
      required={required}
      type={type}
      placeholder={placeholder}
      className={className}
      sx={{
        "& .MuiOutlinedInput-root": {
            height: "40px",
        }
      }}
    />
  );
}

export default InputField;

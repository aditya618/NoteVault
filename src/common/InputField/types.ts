export type InputFieldType = "text" | "email" | "password";


export interface InputFieldProps {
  type?: InputFieldType;
  placeholder?: string;
  required?: boolean;
  className?: string;
  onValueChange?: (_value: string) => void;
}
import { InputHTMLAttributes } from "react";
import { ContainerInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  placeholder: string;
  register: any;
  label: string;
}

export function Input({
  type,
  name,
  placeholder,
  register,
  label,
}: InputProps) {
  return (
    <ContainerInput>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register(name)} />
    </ContainerInput>
  );
}

import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface Props {
  label: string;
  placeholder: string;
  className?: string;
}

export const FormEmailField = ({ label, placeholder, className }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        className={className}
        type="email"
        label={label}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        required
        margin="dense"
        error={!!errors.email}
        helperText={(errors.email ? errors.email.message : "") as string}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          },
        })}
      />
    </>
  );
};

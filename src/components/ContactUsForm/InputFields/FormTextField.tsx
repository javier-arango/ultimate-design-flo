import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  className?: string;
}

const FormTextField = ({ name, label, placeholder, className }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        className={className}
        label={label}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        required
        margin="dense"
        {...register(name)}
      />
    </>
  );
};

export default FormTextField;

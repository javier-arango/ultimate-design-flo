import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface Props {
  label: string;
  placeholder: string;
  minRows?: number;
  className?: string;
}

const FormMessageField = ({
  label,
  placeholder,
  minRows = 8,
  className,
}: Props) => {
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
        multiline
        minRows={minRows}
        margin="dense"
        {...register("message")}
      />
    </>
  );
};

export default FormMessageField;

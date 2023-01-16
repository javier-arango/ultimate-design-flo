import { Grid, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const FirstNameField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Grid item xs={12} sm={6}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              placeholder="What's your first name"
              variant="outlined"
              fullWidth
              required
            />
          )}
        />
      </Grid>
    </>
  );
};

export default FirstNameField;

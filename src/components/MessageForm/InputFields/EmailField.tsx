import { Grid, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const EmailField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Grid item xs={12}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              label="Email address"
              placeholder="you@example.com"
              variant="outlined"
              fullWidth
              required
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ""}
            />
          )}
        />
      </Grid>
    </>
  );
};

export default EmailField;

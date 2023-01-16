import { Grid, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const LastNameField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Grid item xs={12} sm={6}>
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              placeholder="What's your last name"
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

export default LastNameField;

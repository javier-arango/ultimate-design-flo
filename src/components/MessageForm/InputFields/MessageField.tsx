import { Grid, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const MessageField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Grid item xs={12}>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Message"
              placeholder="Write your message for the team here"
              variant="outlined"
              multiline
              minRows={8}
              fullWidth
              required
              error={!!errors.message}
              helperText={errors.message ? errors.message?.message : ""}
            />
          )}
        />
      </Grid>
    </>
  );
};

export default MessageField;

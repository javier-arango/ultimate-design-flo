import { SubmitHandler, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { IFormInputs } from "../../lib";

import { Grid } from "@mui/material";
import { Button, InfoBlock } from "../Global";
import {
  EmailField,
  FirstNameField,
  LastNameField,
  MessageField,
} from "./InputFields";

const schema = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required(),
  message: string().required(),
});

const MessageForm = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <InfoBlock
      headline="Send us a message"
      paragraph="Contact us regarding any concern or inquiries."
    >
      <Grid className="padding-responsive">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {/* First name input */}
              <FirstNameField />

              {/* Last name input */}
              <LastNameField />

              {/* Email input */}
              <EmailField />

              {/* Message input */}
              <MessageField />

              <Grid item xs={12}>
                <Button label="submit" type="submit" />
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
    </InfoBlock>
  );
};

export default MessageForm;

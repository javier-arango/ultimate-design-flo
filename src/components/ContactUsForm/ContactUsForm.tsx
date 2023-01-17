import styles from "./ContactUsForm.module.css";

import { SubmitHandler, FormProvider, useForm } from "react-hook-form";
import { IFormInputs } from "../../lib";
import { useState } from "react";
import router from "next/router";

import { Grid } from "@mui/material";
import { Button, InfoBlock } from "../Global";
import { FormEmailField, FormTextField, FormMessageField } from "./InputFields";

const ContactUsForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const methods = useForm<IFormInputs>();

  // Handle the form submission
  const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    await fetch("/api/submit-contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Response received!");
        setSubmitted(true);
      }
    });
  };

  return (
    <>
      {!submitted ? (
        <InfoBlock
          headline="Send us a message"
          paragraph="Contact us regarding any concern or inquiries."
        >
          <Grid className="padding-responsive">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  {/* First name input */}
                  <Grid item xs={12} sm={6}>
                    <FormTextField
                      className={styles.inputField}
                      name="firstName"
                      label="First Name"
                      placeholder="What's your first name ?"
                    />
                  </Grid>

                  {/* Last name input */}
                  <Grid item xs={12} sm={6}>
                    <FormTextField
                      className={styles.inputField}
                      name="lastName"
                      label="Last Name"
                      placeholder="What's your last name ?"
                    />
                  </Grid>

                  {/* Email input */}
                  <Grid item xs={12}>
                    <FormEmailField
                      className={styles.inputField}
                      label="Email"
                      placeholder="info@example.com"
                    />
                  </Grid>

                  {/* Message input */}
                  <Grid item xs={12}>
                    <FormMessageField
                      className={styles.inputField}
                      label="Message"
                      placeholder="Write your message for the team here"
                    />
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button label="submit" type="submit" />
                  </Grid>
                </Grid>
              </form>
            </FormProvider>
          </Grid>
        </InfoBlock>
      ) : (
        <InfoBlock
          title="Thank you!"
          headline="We received your message!"
          paragraph="PLease allow 24 hours for a response. If you want to send another message, please refresh the page or click the button below."
          button={{
            label: "New Message",
            variant: "secondary",
            onClick: () => {
              router.reload();
            },
          }}
        />
      )}
    </>
  );
};

export default ContactUsForm;

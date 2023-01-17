import { IFormInputs } from "../lib";

export default function generateEmailResponse({
  firstName,
  lastName,
  email,
  message,
}: IFormInputs) {
  return {
    textResponse: `
      New Contact Form Submission
      You have received a new message from your contact form.

      Name: ${firstName} ${lastName}
      Email: ${email}
      Message:
      ${message}
    `,

    htmlResponse: `
    <h1>New Contact Form Submission</h1>
    <p>You have received a new message from your contact form.</p>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
  };
}

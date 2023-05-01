// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import { generateEmailTemplate } from "utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data submitted in request's body.
  const { firstName, lastName, email, message } = req.body;
  const emailTemplate = generateEmailTemplate(req.body);
  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GOOGLE_MAIL_USER,
      pass: process.env.GOOGLE_MAIL_PASS,
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"${firstName + " " + lastName}" ${email}`,
      to: process.env.GOOGLE_MAIL_USER,
      subject: `Message from ${firstName + " " + lastName}`,
      text: emailTemplate.textResponse,
      html: emailTemplate.htmlResponse,
    });
  } catch (error: Error | any) {
    return res.status(500).json("Failed to send message!");
  }

  return res.status(200).json("Message successfully sent!");
}

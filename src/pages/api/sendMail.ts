import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from 'nodemailer'

export const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, message } = req.body
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_MAIL as string,
          pass: process.env.GMAIL_APP_PASSWORD as string,
        },
    });

    try {
      const mailOptions = {
        from: `${name} <${email}>`,
        to: process.env.GMAIL_MAIL,
        subject: 'New Contact Form Submission from Portfolio Website',
        text: `You have a new contact form submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p>You have a new contact form submission</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      };

      transporter.sendMail(mailOptions, function (err) {
        if (err) {
          console.log('Error: ' + err);
        } else {
          console.log('Message sent');
        }
        res.status(201).json({ message: 'success' });
      });
    } catch (error) {
      res.status(201).json({ message: 'Unable to send mail' });
    }
}

export default sendMail
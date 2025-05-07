import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

type IMailOption = {
  from: string;
  to: string;
  subject?: string;
  text?: string;
  html?: string;
};
const sendEmail = async (options: IMailOption) => {
  const transporter = nodemailer.createTransport({
    host: String(process.env.EMAIL_HOST),
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    // requireTLS: true,
    logger: true,
    debug: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: options.from,
    to: process.env.EMAIL_USER as string,
    subject: options.subject,
    text: options.text,
    html: options.text,
  };

  transporter.sendMail(
    mailOptions,
    function (err: Error | null, data: SMTPTransport.SentMessageInfo) {
      if (err !== null) throw err;
      return data;
    }
  );
};

export default sendEmail;

import nodemailer from "nodemailer";
import { getAdminTemplate } from "../../lib/emailTemplates/adminTemplate";
import { getCustomerTemplate } from "../../lib/emailTemplates/customerTemplate";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin email
    await transporter.sendMail({
      from: `"Falcoon Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Lead from ${firstName}`,
      html: getAdminTemplate({ firstName, lastName, email, phone, message }),
    });

    // Customer email
    await transporter.sendMail({
      from: `"Falcoon Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message",
      html: getCustomerTemplate({ firstName }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}

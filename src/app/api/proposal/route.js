import nodemailer from "nodemailer";
import { getProposalAdminTemplate } from "../../lib/emailTemplates/proposalAdminTemplate";
import { getProposalCustomerTemplate } from "../../lib/emailTemplates/proposalCustomerTemplate";

export async function POST(req) {
  try {
    const body = await req.json();
    const { selections, total } = body;

    console.log("Incoming:", selections);

    if (!selections?.contact?.email) {
      throw new Error("Customer email missing");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify(); // 🔥 important

    // ADMIN EMAIL
    await transporter.sendMail({
      from: `"Falcoon Proposal" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Proposal from ${selections.contact.name}`,
      html: getProposalAdminTemplate({ selections, total }),
    });

    // CUSTOMER EMAIL
    await transporter.sendMail({
      from: `"Falcoon Team" <${process.env.EMAIL_USER}>`,
      to: selections.contact.email,
      subject: "Your Falcoon Proposal 🚀",
      html: getProposalCustomerTemplate({ selections, total }), // ✅ FIXED
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("❌ PROPOSAL ERROR FULL:", error);

    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

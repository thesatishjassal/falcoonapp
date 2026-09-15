import nodemailer from "nodemailer";
import { getProposalAdminTemplate } from "../../lib/emailTemplates/proposalAdminTemplate";
import { getProposalCustomerTemplate } from "../../lib/emailTemplates/proposalCustomerTemplate";

export async function POST(req) {
  try {
    const body = await req.json();
    const { selections, total } = body;

    console.log("Incoming proposal:", selections);

    const contact = selections?.contact;

    if (!contact?.name?.trim()) {
      throw new Error("Customer name missing");
    }

    if (!contact?.email?.trim()) {
      throw new Error("Customer email missing");
    }

    if (!contact?.city?.trim()) {
      throw new Error("Customer city missing");
    }

    if (!contact?.phone?.trim()) {
      throw new Error("Customer phone missing");
    }

    if (
      contact?.countryCode !== "GB" ||
      contact?.country !== "United Kingdom"
    ) {
      throw new Error(
        "Only United Kingdom quotation requests are accepted."
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    // ─────────────────────────────────────────────
    // ADMIN EMAIL
    // ─────────────────────────────────────────────

    await transporter.sendMail({
      from: `"Falcoon Proposal" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New UK Proposal — ${contact.name}`,
      html: getProposalAdminTemplate({
        selections,
        total,
      }),
    });

    // ─────────────────────────────────────────────
    // CUSTOMER EMAIL
    // ─────────────────────────────────────────────

    await transporter.sendMail({
      from: `"Falcoon Team" <${process.env.EMAIL_USER}>`,
      to: contact.email,
      subject: "Your Falcoon UK Proposal",
      html: getProposalCustomerTemplate({
        selections,
        total,
      }),
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "❌ PROPOSAL ERROR FULL:",
      error
    );

    return Response.json(
      {
        success: false,
        error:
          error?.message ||
          "Unable to send proposal.",
      },
      {
        status: 500,
      }
    );
  }
}
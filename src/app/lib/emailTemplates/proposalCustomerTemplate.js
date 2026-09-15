const CALENDLY_URL = "https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call";
const WHATSAPP_URL = "https://wa.me/917888467258";
const LOGO_URL =
  "https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/8969127b-f40f-4ec1-beef-4e20cdc207b4/d189eed8.png";

const currency = (n) => "£" + Number(n || 0).toLocaleString("en-GB");

export function getProposalCustomerTemplate({ selections, total }) {
  const { contact, audience, core, addons = [], support } = selections;
  const name = contact?.name || "there";
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const quoteId = "FAL-" + Math.floor(1000 + Math.random() * 9000);

  return `
  <div style="background:#f7f1e4;padding:40px 0;font-family:Georgia,'Times New Roman',serif;">

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">

          <table width="620" cellpadding="0" cellspacing="0" style="background:#fffdf7;border-radius:14px;overflow:hidden;border:1px solid #ece2cc;">

            <!-- HEADER -->
            <tr>
              <td style="background:#241f1c;padding:28px 32px;">
                <table width="100%">
                  <tr>
                    <td><img src="${LOGO_URL}" alt="Falcoon" style="height:34px;" /></td>
                    <td align="right">
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.06em;color:#c39a56;">QUOTATION</p>
                      <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#f7f1e4;">#${quoteId}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- INTRO -->
            <tr>
              <td style="padding:32px 32px 0;">
                <h1 style="margin:0 0 8px;font-size:22px;font-weight:600;color:#241f1c;">Hi ${name}, here's your funnel</h1>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#5b5148;line-height:1.6;">
                  Thanks for building this out with us. Below is exactly what's included and what it costs —
                  nothing hidden, nothing added without your say-so.
                </p>
              </td>
            </tr>

            <!-- META -->
            <tr>
              <td style="padding:24px 32px 0;">
                <table width="100%" style="background:#f7f1e4;border-radius:10px;">
                  <tr>
                    <td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;">
                      <p style="margin:0;font-size:11px;color:#96702f;text-transform:uppercase;letter-spacing:0.04em;">Prepared for</p>
                      <p style="margin:4px 0 0;font-size:14px;font-weight:700;color:#241f1c;">${name}</p>
                      <p style="margin:2px 0 0;font-size:12.5px;color:#5b5148;">${contact?.email || ""}${contact?.phone ? " · " + contact.phone : ""}</p>
                    </td>
                    <td align="right" style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;">
                      <p style="margin:0;font-size:11px;color:#96702f;text-transform:uppercase;letter-spacing:0.04em;">Date</p>
                      <p style="margin:4px 0 0;font-size:14px;color:#241f1c;">${date}</p>
                      ${audience ? `<p style="margin:6px 0 0;font-size:11px;color:#96702f;text-transform:uppercase;letter-spacing:0.04em;">Selling</p><p style="margin:2px 0 0;font-size:13px;color:#241f1c;">${audience.label}</p>` : ""}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- BUILD TABLE -->
            <tr>
              <td style="padding:24px 32px 0;">
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;">
                  <tr>
                    <th align="left" style="padding:10px 4px;font-size:11px;letter-spacing:0.04em;color:#96702f;border-bottom:1.5px solid #241f1c;">YOUR BUILD</th>
                    <th align="right" style="padding:10px 4px;font-size:11px;letter-spacing:0.04em;color:#96702f;border-bottom:1.5px solid #241f1c;">PRICE</th>
                  </tr>
                  ${row(core?.label || "Core Funnel Build", "Landing, checkout & thank-you page", core?.price)}
                  ${addons.map((a) => row(a.name, "Add-on", a.price)).join("")}
                </table>
              </td>
            </tr>

            <!-- TOTALS -->
            <tr>
              <td style="padding:20px 32px 0;">
                <table width="100%" style="font-family:Arial,Helvetica,sans-serif;">
                  <tr>
                    <td></td>
                    <td width="230">
                      <table width="100%">
                        <tr>
                          <td style="padding:4px 0;font-size:13px;color:#5b5148;">One-time build</td>
                          <td align="right" style="padding:4px 0;font-size:24px;font-weight:700;color:#241f1c;">${currency(total)}</td>
                        </tr>
                        ${
                          support
                            ? `<tr>
                                <td style="padding:4px 0;font-size:13px;color:#5b5148;">${support.name}</td>
                                <td align="right" style="padding:4px 0;font-size:14px;font-weight:700;color:#96702f;">${currency(support.price)}${support.period}</td>
                              </tr>`
                            : ""
                        }
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- MESSAGE -->
            <tr>
              <td style="padding:26px 32px 0;">
                <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#5b5148;line-height:1.6;margin:0;">
                  We'll follow up by email within one working day. If you'd rather talk it through first,
                  grab a free 20-minute slot with Satish below.
                </p>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding:20px 32px 0;">
                <a href="${CALENDLY_URL}"
                  style="display:inline-block;padding:13px 22px;background:#241f1c;color:#f7f1e4;
                  border-radius:999px;text-decoration:none;font-family:Arial,Helvetica,sans-serif;
                  font-size:14px;font-weight:700;margin-right:10px;">
                  Book a free call
                </a>
                <a href="${WHATSAPP_URL}"
                  style="display:inline-block;padding:13px 22px;background:transparent;
                  border:1.5px solid #96702f;color:#241f1c;border-radius:999px;text-decoration:none;
                  font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;">
                  Message on WhatsApp
                </a>
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="padding:30px 32px 0;">
                <div style="height:1px;background:#ece2cc;"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 32px 28px;">
                <p style="font-family:Arial,Helvetica,sans-serif;font-size:11.5px;color:#96702f;margin:0;">
                  Falcoon · Fitness funnels for UK fitness brands · Fixed pricing, no hidden fees
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </div>
  `;
}

function row(title, subtitle, price) {
  return `
    <tr>
      <td style="padding:12px 4px;border-bottom:1px solid #ece2cc;">
        <p style="margin:0;font-size:14px;color:#241f1c;font-weight:700;">${title}</p>
        <p style="margin:2px 0 0;font-size:12px;color:#96702f;">${subtitle}</p>
      </td>
      <td align="right" style="padding:12px 4px;border-bottom:1px solid #ece2cc;font-size:14px;color:#241f1c;white-space:nowrap;">
        ${currency(price)}
      </td>
    </tr>
  `;
}
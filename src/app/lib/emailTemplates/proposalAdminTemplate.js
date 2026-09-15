const LOGO_URL =
  "https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/8969127b-f40f-4ec1-beef-4e20cdc207b4/d189eed8.png";

const currency = (n) => "£" + Number(n || 0).toLocaleString("en-GB");

export function getProposalAdminTemplate({ selections, total }) {
  const { contact, audience, core, addons = [], support } = selections;

  return `
  <div style="margin:0;padding:0;background:#f7f1e4;font-family:Arial,Helvetica,sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
      <tr>
        <td align="center">

          <table width="560" cellpadding="0" cellspacing="0" style="background:#fffdf7;border-radius:14px;padding:32px;border:1px solid #ece2cc;">

            <!-- LOGO -->
            <tr>
              <td style="padding-bottom:20px;">
                <img src="${LOGO_URL}" alt="Falcoon" style="height:36px;" />
              </td>
            </tr>

            <!-- HEADER -->
            <tr>
              <td style="padding-bottom:16px;">
                <h2 style="margin:0;font-size:19px;color:#241f1c;font-family:Georgia,serif;font-weight:600;">
                  New quotation request
                </h2>
                <p style="margin:6px 0 0;font-size:12.5px;color:#96702f;">
                  Falcoon Funnel Builder ${audience ? "· " + audience.label : ""}
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 0;">
                <div style="height:1px;background:#ece2cc;"></div>
              </td>
            </tr>

            <!-- CUSTOMER INFO -->
            <tr>
              <td style="padding-bottom:20px;">
                <p style="margin:6px 0;font-size:14px;color:#241f1c;"><strong>Name:</strong> ${contact?.name || "—"}</p>
                <p style="margin:6px 0;font-size:14px;color:#241f1c;"><strong>Email:</strong> ${contact?.email || "—"}</p>
                <p style="margin:6px 0;font-size:14px;color:#241f1c;"><strong>Phone:</strong> ${contact?.phone || "—"}</p>
              </td>
            </tr>

            <!-- CONFIGURATION -->
            <tr>
              <td style="padding-bottom:20px;">
                <p style="margin:0 0 10px;font-size:12px;color:#96702f;text-transform:uppercase;letter-spacing:0.04em;">Configuration</p>
                <div style="background:#f7f1e4;border-radius:10px;padding:16px;">
                  <p style="margin:0 0 8px;font-size:14px;color:#241f1c;">
                    <strong>${core?.label || "Core Funnel Build"}</strong> — ${currency(core?.price)}
                  </p>
                  ${
                    addons.length
                      ? addons.map((a) => `<p style="margin:0 0 6px;font-size:13.5px;color:#5b5148;">+ ${a.name} — ${currency(a.price)}</p>`).join("")
                      : `<p style="margin:0 0 6px;font-size:13.5px;color:#5b5148;">No add-ons selected</p>`
                  }
                  ${
                    support
                      ? `<p style="margin:10px 0 0;font-size:13.5px;color:#96702f;font-weight:700;">Support: ${support.name} — ${currency(support.price)}${support.period}</p>`
                      : `<p style="margin:10px 0 0;font-size:13.5px;color:#5b5148;">No ongoing support plan</p>`
                  }
                </div>
              </td>
            </tr>

            <!-- TOTAL -->
            <tr>
              <td style="padding-bottom:20px;">
                <div style="background:#241f1c;padding:18px;border-radius:10px;text-align:center;">
                  <p style="margin:0;font-size:12.5px;color:#c39a56;">One-time build value</p>
                  <h2 style="margin:6px 0 0;color:#f7f1e4;font-family:Georgia,serif;">${currency(total)}</h2>
                </div>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding-bottom:8px;">
                <a href="mailto:${contact?.email || ""}"
                  style="display:inline-block;padding:11px 18px;background:#241f1c;
                  color:#f7f1e4;text-decoration:none;border-radius:999px;font-size:13px;font-weight:700;margin-right:8px;">
                  Reply to client
                </a>
                ${
                  contact?.phone
                    ? `<a href="tel:${contact.phone}"
                        style="display:inline-block;padding:11px 18px;background:transparent;
                        border:1.5px solid #96702f;color:#241f1c;text-decoration:none;border-radius:999px;font-size:13px;font-weight:700;">
                        Call client
                      </a>`
                    : ""
                }
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="padding-top:16px;">
                <div style="height:1px;background:#ece2cc;"></div>
              </td>
            </tr>
            <tr>
              <td style="padding-top:12px;">
                <p style="margin:0;font-size:11.5px;color:#96702f;">
                  Sent from the Falcoon quotation system
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
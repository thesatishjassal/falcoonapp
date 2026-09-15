const CALENDLY_URL =
  "https://calendly.com/thesatishjassal/free-strategy-call-uk";

const WHATSAPP_URL =
  "https://wa.me/917888467258";

const LOGO_URL =
  "https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/8969127b-f40f-4ec1-beef-4e20cdc207b4/d189eed8.png";

const currency = (n) =>
  "£" +
  Number(n || 0).toLocaleString("en-GB");

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export function getProposalCustomerTemplate({
  selections,
  total,
}) {
  const {
    contact = {},
    audience,
    core,
    addons = [],
    support,
  } = selections || {};

  const name = escapeHtml(
    contact?.name || "there"
  );

  const email = escapeHtml(
    contact?.email || ""
  );

  const country = escapeHtml(
    contact?.country ||
      "United Kingdom"
  );

  const city = escapeHtml(
    contact?.city || ""
  );

  const phone = escapeHtml(
    contact?.phone || ""
  );

  const date =
    new Date().toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  const quoteId =
    "FAL-" +
    Math.floor(
      1000 + Math.random() * 9000
    );

  return `
  <div style="
    background:#f5f5f5;
    padding:40px 0;
    font-family:Georgia,'Times New Roman',serif;
  ">

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">

          <table
            width="620"
            cellpadding="0"
            cellspacing="0"
            style="
              background:#ffffff;
              border-radius:16px;
              overflow:hidden;
              border:1px solid #e3e3e3;
            "
          >

            <!-- HEADER -->
            <tr>
              <td style="
                background:#111111;
                padding:28px 32px;
              ">

                <table width="100%">
                  <tr>

                    <td>
                      <img
                        src="${LOGO_URL}"
                        alt="Falcoon"
                        style="
                          height:34px;
                          display:block;
                        "
                      />
                    </td>

                    <td align="right">

                      <p style="
                        margin:0;
                        font-family:Arial,Helvetica,sans-serif;
                        font-size:10px;
                        letter-spacing:.08em;
                        color:#c39a56;
                        font-weight:700;
                      ">
                        QUOTATION
                      </p>

                      <p style="
                        margin:4px 0 0;
                        font-family:Arial,Helvetica,sans-serif;
                        font-size:13px;
                        color:#ffffff;
                      ">
                        #${quoteId}
                      </p>

                    </td>

                  </tr>
                </table>

              </td>
            </tr>

            <!-- INTRO -->
            <tr>
              <td style="padding:32px 32px 0;">

                <p style="
                  margin:0 0 7px;
                  font-family:Arial,Helvetica,sans-serif;
                  font-size:10px;
                  color:#96702f;
                  font-weight:700;
                  text-transform:uppercase;
                  letter-spacing:.07em;
                ">
                  UK fitness quotation
                </p>

                <h1 style="
                  margin:0 0 8px;
                  font-size:23px;
                  font-weight:600;
                  color:#111111;
                  line-height:1.2;
                ">
                  Hi ${name}, here's your funnel
                </h1>

                <p style="
                  margin:0;
                  font-family:Arial,Helvetica,sans-serif;
                  font-size:14px;
                  color:#5b5148;
                  line-height:1.6;
                ">
                  Thanks for building this out with us.
                  Below is exactly what's included and
                  what it costs — with no hidden fees.
                </p>

              </td>
            </tr>

            <!-- CONTACT / LOCATION -->
            <tr>
              <td style="padding:24px 32px 0;">

                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    background:#faf8f4;
                    border-radius:11px;
                    border:1px solid #ece6dc;
                  "
                >

                  <tr>

                    <td style="
                      padding:16px 18px;
                      font-family:Arial,Helvetica,sans-serif;
                    ">

                      <p style="
                        margin:0;
                        font-size:10px;
                        color:#96702f;
                        text-transform:uppercase;
                        letter-spacing:.06em;
                        font-weight:700;
                      ">
                        Prepared for
                      </p>

                      <p style="
                        margin:5px 0 0;
                        font-size:14px;
                        font-weight:700;
                        color:#111111;
                      ">
                        ${name}
                      </p>

                      <p style="
                        margin:3px 0 0;
                        font-size:12px;
                        color:#5b5148;
                      ">
                        ${email}
                      </p>

                    </td>

                    <td
                      align="right"
                      style="
                        padding:16px 18px;
                        font-family:Arial,Helvetica,sans-serif;
                      "
                    >

                      <p style="
                        margin:0;
                        font-size:10px;
                        color:#96702f;
                        text-transform:uppercase;
                        letter-spacing:.06em;
                        font-weight:700;
                      ">
                        Location
                      </p>

                      <p style="
                        margin:5px 0 0;
                        font-size:13.5px;
                        font-weight:700;
                        color:#111111;
                      ">
                        🇬🇧 ${city}
                      </p>

                      <p style="
                        margin:2px 0 0;
                        font-size:11.5px;
                        color:#5b5148;
                      ">
                        ${country}
                      </p>

                    </td>

                  </tr>

                  <tr>

                    <td colspan="2" style="
                      padding:0 18px 15px;
                      font-family:Arial,Helvetica,sans-serif;
                    ">

                      <p style="
                        margin:0;
                        font-size:11.5px;
                        color:#5b5148;
                      ">
                        Phone:
                        <strong style="color:#111111;">
                          ${phone || "—"}
                        </strong>
                      </p>

                    </td>

                  </tr>

                </table>

              </td>
            </tr>

            <!-- SELLING -->
            ${
              audience
                ? `
                  <tr>
                    <td style="
                      padding:20px 32px 0;
                      font-family:Arial,Helvetica,sans-serif;
                    ">

                      <p style="
                        margin:0 0 7px;
                        font-size:10px;
                        color:#96702f;
                        text-transform:uppercase;
                        letter-spacing:.06em;
                        font-weight:700;
                      ">
                        Your funnel is for
                      </p>

                      <div style="
                        display:inline-block;
                        background:#f1e4c8;
                        color:#241f1c;
                        border-radius:999px;
                        padding:7px 12px;
                        font-size:12px;
                        font-weight:700;
                      ">
                        ${escapeHtml(
                          audience.label
                        )}
                      </div>

                    </td>
                  </tr>
                `
                : ""
            }

            <!-- BUILD TABLE -->
            <tr>
              <td style="
                padding:24px 32px 0;
              ">

                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    border-collapse:collapse;
                    font-family:Arial,Helvetica,sans-serif;
                  "
                >

                  <tr>

                    <th
                      align="left"
                      style="
                        padding:10px 4px;
                        font-size:10px;
                        letter-spacing:.05em;
                        color:#96702f;
                        border-bottom:1.5px solid #111111;
                      "
                    >
                      YOUR BUILD
                    </th>

                    <th
                      align="right"
                      style="
                        padding:10px 4px;
                        font-size:10px;
                        letter-spacing:.05em;
                        color:#96702f;
                        border-bottom:1.5px solid #111111;
                      "
                    >
                      PRICE
                    </th>

                  </tr>

                  ${row(
                    core?.label ||
                      "Core Funnel Build",
                    "Landing, checkout & thank-you page",
                    core?.price
                  )}

                  ${addons
                    .map((a) =>
                      row(
                        a.name,
                        "Add-on",
                        a.price
                      )
                    )
                    .join("")}

                </table>

              </td>
            </tr>

            <!-- TOTALS -->
            <tr>
              <td style="padding:20px 32px 0;">

                <table
                  width="100%"
                  style="
                    font-family:Arial,Helvetica,sans-serif;
                  "
                >

                  <tr>

                    <td></td>

                    <td width="240">

                      <table width="100%">

                        <tr>

                          <td style="
                            padding:4px 0;
                            font-size:13px;
                            color:#5b5148;
                          ">
                            One-time build
                          </td>

                          <td
                            align="right"
                            style="
                              padding:4px 0;
                              font-size:25px;
                              font-weight:700;
                              color:#111111;
                            "
                          >
                            ${currency(total)}
                          </td>

                        </tr>

                        ${
                          support
                            ? `
                              <tr>

                                <td style="
                                  padding:4px 0;
                                  font-size:13px;
                                  color:#5b5148;
                                ">
                                  ${escapeHtml(
                                    support.name
                                  )}
                                </td>

                                <td
                                  align="right"
                                  style="
                                    padding:4px 0;
                                    font-size:14px;
                                    font-weight:700;
                                    color:#96702f;
                                  "
                                >
                                  ${currency(
                                    support.price
                                  )}
                                  ${escapeHtml(
                                    support.period ||
                                      ""
                                  )}
                                </td>

                              </tr>
                            `
                            : ""
                        }

                      </table>

                    </td>

                  </tr>

                </table>

              </td>
            </tr>

            <!-- NOTE -->
            <tr>
              <td style="padding:26px 32px 0;">

                <p style="
                  font-family:Arial,Helvetica,sans-serif;
                  font-size:14px;
                  color:#5b5148;
                  line-height:1.6;
                  margin:0;
                ">
                  We'll follow up by email within one
                  working day. If you'd rather talk it
                  through first, book a free call with
                  Satish below.
                </p>

              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding:20px 32px 0;">

                <a
                  href="${CALENDLY_URL}"
                  style="
                    display:inline-block;
                    padding:13px 22px;
                    background:#111111;
                    color:#ffffff;
                    border-radius:999px;
                    text-decoration:none;
                    font-family:Arial,Helvetica,sans-serif;
                    font-size:14px;
                    font-weight:700;
                    margin-right:10px;
                  "
                >
                  Book a free call
                </a>

                <a
                  href="${WHATSAPP_URL}"
                  style="
                    display:inline-block;
                    padding:13px 22px;
                    background:#c39a56;
                    color:#ffffff;
                    border-radius:999px;
                    text-decoration:none;
                    font-family:Arial,Helvetica,sans-serif;
                    font-size:14px;
                    font-weight:700;
                  "
                >
                  Message us
                </a>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="padding:30px 32px 0;">

                <div style="
                  height:1px;
                  background:#e7e7e7;
                "></div>

              </td>
            </tr>

            <tr>
              <td style="
                padding:14px 32px 28px;
              ">

                <p style="
                  font-family:Arial,Helvetica,sans-serif;
                  font-size:11px;
                  color:#96702f;
                  margin:0;
                  line-height:1.5;
                ">
                  Falcoon · Fitness funnels for UK
                  fitness professionals · Fixed pricing,
                  no hidden fees
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

      <td style="
        padding:12px 4px;
        border-bottom:1px solid #e7e0d6;
      ">

        <p style="
          margin:0;
          font-size:14px;
          color:#111111;
          font-weight:700;
        ">
          ${escapeHtml(title)}
        </p>

        <p style="
          margin:3px 0 0;
          font-size:11.5px;
          color:#96702f;
        ">
          ${escapeHtml(subtitle)}
        </p>

      </td>

      <td
        align="right"
        style="
          padding:12px 4px;
          border-bottom:1px solid #e7e0d6;
          font-size:14px;
          color:#111111;
          white-space:nowrap;
        "
      >
        ${currency(price)}
      </td>

    </tr>
  `;
}